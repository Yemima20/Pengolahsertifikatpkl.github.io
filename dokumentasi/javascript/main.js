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







































































































































































































import siswadb, {
  bulkcreate,
  createEle,
  getData,
  SortObj
} from "./module.js";
 

let db = siswadb("Siswadb", {
  siswa: `++id, namalengkap, tempattanggallahir, nis, tempatpkl, predikat, gurupembimbing`
});
  
//input tags
const id = document.getElementById("id");
const namalengkap = document.getElementById("namalengkap");
const tempattanggallahir = document.getElementById("tempattanggallahir");
const nis = document.getElementById("nis");
const tempatpkl = document.getElementById("tempatpkl");
const predikat = document.getElementById("predikat");
const gurupembimbing = document.getElementById("gurupembimbing");
  
//buttons
const btnadd = document.getElementById("btn-add");
const btnread = document.getElementById("btn-read");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

// Not Found
const notfound = document.getElementById("notfound");
  
// DATA SISWA
  
// ADD BUTTON
btnadd.onclick = (event) => {
  // insert values
  let flag = bulkcreate(db.siswa, {
    namalengkap: namalengkap.value,
    tempattanggallahir: tempattanggallahir.value,
    nis: nis.value,
    tempatpkl: tempatpkl.value,
    predikat: predikat.value,
    gurupembimbing: gurupembimbing.value
  });

  namalengkap.value = tempattanggallahir.value = nis.value =  tempatpkl.value =  predikat.value =  gurupembimbing.value = "";

  // make id update automatically
  getData(db.siswa, (data) =>{
    id.value= data.id + 1 || 1;
  });
  table();

  // show add notification
  let insertmsg = document.querySelector(".insertmsg");
  getMsg(flag, insertmsg);
  
};

//EVENT ON READ BUTTON
btnread.onclick = table;


// UPDATE BUTTON
btnupdate.onclick = ()=>{
  const iniid = parseInt(id.value || 0);
  if(iniid){
    db.siswa.update(iniid, {
    namalengkap: namalengkap.value,
    tempattanggallahir: tempattanggallahir.value,
    nis: nis.value,
    tempatpkl: tempatpkl.value,
    predikat: predikat.value,
    gurupembimbing: gurupembimbing.value
    }).then((updated)=>{
      // show update notification
      let get = updated ? true : false;
      
      // display msg
      let updatemsg = document.querySelector (".updatemsg");
      getMsg(get, updatemsg);

      namalengkap.value = tempattanggallahir.value = nis.value =  tempatpkl.value =  predikat.value =  gurupembimbing.value = "";
    })
  }
}

// DELETE BUTTON
btndelete.onclick = ()=>{
  db.delete();
  db = siswadb("siswadb", {
    siswa: `++id, namalengkap, tempattanggallahir, nis, tempatpkl, predikat, gurupembimbing`
  });
  db.open();
  table();
  textID(id);

  // display msg
  let deletemsg = document.querySelector(".deletemsg");
  getMsg(true, deletemsg);
}

// Window Onload Event
window.onload = ()=>{
  textID(id);
}

function textID(textboxid){
  getData(db.siswa, data=>{
    textboxid.value = data.id + 1 || 1;
  })
}

// EDIT BUTTON IN THE TABLE
function editbtn(event){
  let thisid = parseInt(event.target.dataset.id);
  db.siswa.get(thisid, data =>{
    let thisdata = SortObj(data);
    id.value= thisdata.id || 0;
    namalengkap.value = thisdata.namalengkap || "";
    tempattanggallahir.value = thisdata.tempattanggallahir || "";
    nis.value = thisdata.nis || "";
    tempatpkl.value = thisdata.tempatpkl || "";
    predikat.value = thisdata.predikat || "";
    gurupembimbing.value = thisdata.gurupembimbing || "";
  })
}

// Edit button and data display in the table
function table(){
  const tbody = document.getElementById("tbody");

  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }

  getData(db.siswa,(data)=>{

    if(data){

      createEle("tr", tbody,tr=>{
        for(const value in data) {
          createEle("td", tr, td=>{
            td.textContent = data[value];
          })
        }
        createEle("td", tr, td=>{
          createEle("i", td, i=>{
            i.className += "fas fa-edit btnedit";
            i.setAttribute(`data-id`,data.id);
            i.onclick = editbtn;
          })
        })
      })

    }else{
      notfound.textContent = "Tidak Ada Data Siswa Dalam Database"
    }

  });
}

// function msg
function getMsg(flag, element) {
  if (flag) {
    // call msg 
    element.className += " movedown";

    setTimeout(() => {
      element.classList.forEach(classname => {
        classname == "movedown" ? undefined : element.classList.remove('movedown');
      })
    }, 4000);
  }
}
