<script>
	import { addNewContactBTN,EditContactBTN, Contacts, getContacts } from '../stores/tableStore';
	import Modal from '../components/modal.svelte';
	import Pagination from '../components/TablePages.svelte';

	getContacts();
</script>

<button
	on:click={addNewContactBTN}
	type="button"
	class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
	>+ ADD NEW</button
>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
	<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" class="px-6 py-3"> ID </th>
				<th scope="col" class="px-6 py-3"> First Name </th>
				<th scope="col" class="px-6 py-3"> Last Name </th>
				<th scope="col" class="px-6 py-3"> Age </th>
				<th scope="col" class="px-6 py-3"> Email </th>
				<th scope="col" class="px-6 py-3"> Gender </th>
				<th scope="col" class="px-6 py-3"> Phone </th>
				<th scope="col" class="px-6 py-3">
					<span class="sr-only">Edit</span>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each $Contacts as contact }
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{contact.id}</th>
					<td class="px-6 py-4"> {contact.FirstName} </td>
					<td class="px-6 py-4"> {contact.LastName} </td>
					<td class="px-6 py-4"> {contact.Age} </td>
					<td class="px-6 py-4"> {contact.Email} </td>
					<td class="px-6 py-4"> {contact.Gender} </td>
					<td class="px-6 py-4"> {contact.PhoneNum} </td>
					<td class="px-6 py-4 text-right">
						<button
							on:click={()=>EditContactBTN(contact)}
							data-modal-toggle="defaultModal"
							type="button"
							class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
					</td>
				</tr>
				{/each}
		</tbody>
	</table>
</div>
<Pagination />
<Modal />
