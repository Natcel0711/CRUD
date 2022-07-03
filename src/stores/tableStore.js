
import { supabase } from "../supabase";
import { writable } from "svelte/store";
export const Contacts = writable([]);
export let Contact = {
  FirstName: "",
  LastName: "",
  Email: "",
  Phone: "",
  Age:0,
  Gender:""
};

export const getContacts = async () => {
  const {data, error} = await supabase.from("Contacts").select();
  if (error) {
    console.log(error);
  }
  Contacts.set(data);
}

export const addContact = async (Contact) => {
  const {data,error} = await supabase.from("Contacts").insert({
    FirstName: Contact.FirstName,
    LastName: Contact.LastName,
    Email: Contact.Email,
    PhoneNum: Contact.Phone,
    Age: Contact.Age
});
  if (error) {
    console.log(error);
  }
  Contacts.update((cur) => [...cur, data[0]]);
}

export function toggleMenu(){
  let menu = document.getElementById('extralarge-modal');
  if (menu?.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  }
  else {
      menu?.classList.add('hidden');
  }
}