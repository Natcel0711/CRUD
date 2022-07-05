
import { supabase } from "../supabase";
import { writable } from "svelte/store";
export const Contacts = writable([]);
export let Contact = writable({
  id:0,
  FirstName: "",
  LastName: "",
  Email: "",
  PhoneNum: "",
  Age: "",
  Gender:""});

export const submit = async (Contact) => {
  console.log(Contact);
  if(Contact.id > 0){
    console.log("Contact went through update");
    updateContact(Contact);
  }
  else{
    console.log("Contact went through add function");
    addContact(Contact);
  }
}
export const getContacts = async () => {
  const {data, error} = await supabase.from("Contacts").select().order('id', {ascending: true});
  if (error) {
    console.log(error);
  }
  Contacts.set(data);
}

const addContact = async (Contact) => {
  let male = document.getElementById("default-radio-1");
  let female = document.getElementById("default-radio-2");
  if(male.checked){
    Contact.Gender = "Male";
  }
  else if(female.checked){
    Contact.Gender = "Female";
  }
  const {data,error} = await supabase.from("Contacts").insert({
    FirstName: Contact.FirstName,
    LastName: Contact.LastName,
    Email: Contact.Email,
    PhoneNum: Contact.Phone,
    Age: Contact.Age,
    Gender: Contact.Gender
});
  if (error) {
    console.log(error);
  }
  console.log(data);
  Contacts.update((cur) => [...cur, data[0]]);
  CloseModal();
  getContacts();
}
//update record in supabase
const updateContact = async (Contact) => {
  console.log(Contact);
  const {data,error} = await supabase.from("Contacts").update({
    FirstName: Contact.FirstName,
    LastName: Contact.LastName,
    Email: Contact.Email,
    PhoneNum: Contact.PhoneNum,
    Age: Contact.Age
  }).match({id:Contact.id});
  if (error) {
    console.log(error);
  }
  console.log(data);
  CloseModal();
  getContacts();
}
export function CloseModal(){
  let menu = document.getElementById('extralarge-modal');
  if (menu?.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  }
  else {
      menu?.classList.add('hidden');
  }
}
export function addNewContactBTN(){
  let menu = document.getElementById('extralarge-modal');
  if (menu?.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    document.getElementById('submitBTN').textContent = "Add Contact";
    document.getElementById('idtxt').value = null;
    document.getElementById("first_nametxt").value = null;
    document.getElementById("last_nametxt").value = null;
    document.getElementById("emailtxt").value = null;
    document.getElementById("phonetxt").value = null;
    document.getElementById("Agetxt").value =  null;
    document.getElementById("default-radio-1").checked = false;
    document.getElementById("default-radio-2").checked = false;
  }
  else {
      menu?.classList.add('hidden');
  }
}
export async function EditContactBTN(contact){
  let menu = document.getElementById('extralarge-modal');
  if(menu?.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    document.getElementById('submitBTN').textContent = "Edit Contact";
    let male = document.getElementById("default-radio-1");
    let female = document.getElementById("default-radio-2");
    Contact.set(contact);
    if(contact.Gender === "Male"){
      male.checked = true;
    }
    else{
      female.checked = true;
    }
  }
  else {
      menu?.classList.add('hidden');
  }
}