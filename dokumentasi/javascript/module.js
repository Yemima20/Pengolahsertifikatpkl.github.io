// Copyright 2019 Akshay Kashyap

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.






































































































































































































const siswadb = (dbname, table) => {
const db = new Dexie(dbname);
  db.version(1).stores(table);
  db.open();

  return db;
};

const bulkcreate = (dbtable, data) =>{
  let flag = empty(data);
  if (flag){
    dbtable.bulkAdd([data]);
    console.log("Data Siswa Telah Ditambah.");
  }else {
    console.log("Tolong Isi Data Siswa!");
  }
  return flag;
};

// Dynamic Element
const createEle = (tagname, appendTo, fn) =>{
  const element = document.createElement(tagname);
  if(appendTo) appendTo.appendChild(element);
  if(fn) fn(element);
};

// check textbox validation
const empty = object => {
  let flag = false;
  for (const value in object) {
    if (object[value] != "" && object.hasOwnProperty(value)) {
      flag = true;
    } else {
      flag = false;
    }
  }
  return flag;
};

//mengambil data dari database
const getData = (dbname, fn) =>{
  let index = 0;
  let obj = {};
  dbname.count(count => {
    if(count){
      dbname.each(table =>{
        obj = SortObj(table);
        fn(obj, index++);
      });
    } else{
      fn(0);
    }
  });
};

const SortObj = sortobj =>{
  let obj = {};
  obj = {
    id: sortobj.id,
    namalengkap: sortobj.namalengkap,
    tempattanggallahir: sortobj.tempattanggallahir,
    nis: sortobj.nis,
    tempatpkl: sortobj.tempatpkl,
    predikat: sortobj.predikat,
    gurupembimbing: sortobj.gurupembimbing
  }
  return obj;
};

export default siswadb;
export{
  bulkcreate,
  getData,
  createEle,
  SortObj
}

