import { Component, OnInit } from '@angular/core';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Camera,CameraOptions,PictureSourceType } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ActionSheetController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-upp',
  templateUrl: './upp.page.html',
  styleUrls: ['./upp.page.scss'],
})
export class UppPage implements OnInit {
  images: any= [];
  storage: any;
  plt: any;
  http: any;

  constructor(public actionSheetController: ActionSheetController,
    private camera:Camera,private filePath:FilePath,private file: File,
    public toastController: ToastController,private loadingController:LoadingController
    ) { }
    
  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }
  
  readFile(file: any, imgEntry, position) {
    const reader = new FileReader();
    reader.onload = () => {
    const formData = new FormData();
    const imgBlob = new Blob([reader.result], {
      type: file.type
    });
    formData.append('file', imgBlob, file.name);
    this.uploadImageData(formData, imgEntry, position);
  };
  reader.readAsArrayBuffer(file);
}

deleteImage(imgEntry, position) {
  this.images.splice(position, 1);
  this.storage.get('my_images').then(images => {
    const arr = JSON.parse(images);
    const filtered = arr.filter(name => name !== imgEntry.name);
    this.storage.set('my_images', JSON.stringify(filtered));
    const correctPath = imgEntry.filePath.substr(0,
      imgEntry.filePath.lastIndexOf('/') + 1);
    this.file.removeFile(correctPath, imgEntry.name).then(res => {
    //  this.presentToast('File removed.');
    });
  });
}

async uploadImageData(formData: FormData, imgEntry, position) {
  const loading = await this.loadingController.create({
    message: 'Uploading image...'
  });
  await loading.present();
  this.http.post(`<<YOUR API>>`, formData).pipe(finalize(() => {
    loading.dismiss();
  })
)
  .subscribe(res => {
    if (res['success']) {
     // this.presentToast('File upload complete.');
    } else {
     // this.presentToast('File upload failed.');
    }
  });
}



  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
         this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
     },
     {
      text: 'Use Camera',
      handler: () => {
        this.takePicture(this.camera.PictureSourceType.CAMERA);
       }
     },
     {
      text: 'Cancel',
      role: 'cancel'
     }]
   });
   await actionSheet.present();
  }
  createFileName() {
    const d = new Date(),
    n = d.getTime(),
    newFileName = n + '.jpg';
    return newFileName;
}
startUpload(imgEntry, position) {
  this.file
  .resolveLocalFilesystemUrl(imgEntry.filePath)
  .then(entry => {
    (<FileEntry>entry).file(file => this.readFile(file, imgEntry, position));
})
  .catch(err => {
   // this.presentToast('Error while reading file.');
  });
}

updateStoredImages(name) {
  this.storage.get().then(images => {
    let arr = [];
    if (images && images !== '' && images.length > 0) {
      arr = JSON.parse(images);
    } else {
      arr = [];
    }
    if (!arr) {
      const newImages = [name];
      this.storage.set('my_images', JSON.stringify(newImages));
    } else {
      arr.push(name);
      this.storage.set('my_images', JSON.stringify(arr));
    }
   const filePath = this.file.dataDirectory + name;
   const resPath = this.pathForImage(filePath);
   const newEntry = {
      name: name,
      path: resPath,
      filePath: filePath
   };
   this.images = [newEntry, ...this.images];
 });
}
  pathForImage(filePath: string) {
    throw new Error("Method not implemented.");
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(
      success => {
        //this.updateStoredImages(newFileName);
        //this.presentToast('Success while storing file.');
      },
      error => {
      //  this.presentToast('Error while storing file.');
      });
  }


  takePicture(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') && sourceType === 
      this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath).then(filePath => {
        const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
        const currentName = imagePath.substring(
          imagePath.lastIndexOf('/') + 1,
          imagePath.lastIndexOf('?'));
        this.copyFileToLocalDir(
          correctPath,
          currentName,
          this.createFileName()
        );
      });
     } else {
      const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      const correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(
        correctPath,
        currentName,
        this.createFileName()
      );
     }
    });
  }
}
