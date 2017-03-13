import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
import { File, FilePath } from 'ionic-native';

declare var cordova: any;

@Injectable()
export class DatabaseController {
  private _db = cordova.file.applicationDirectory+'www/assets/files/database/appdata.db';

  private _db_path = '/www/assets/files/database/appdata.db';
  // private _db_path = File.listDir(cordova.file.applicationDirectory, 'www/assets/files/database').then( suc => console.log(suc) ).catch(err => console.log(err));

  constructor() {
    console.log(this._db);
    console.log(this._db_path);

    this.initDB().then( suc => console.log(suc) ).catch( err => console.log(err) );
  }

  public initDB() {
    return SQLite.openDatabase({
      name: this._db_path,
      location: 'default'
    });
  }

}
