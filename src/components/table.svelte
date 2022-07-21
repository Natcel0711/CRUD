<script>
	import { addNewContactBTN, EditContactBTN, Contacts, getContacts } from '../stores/tableStore';
	import Modal from '../components/modal.svelte';
	import Pagination from '../components/TablePages.svelte';

	getContacts();
</script>

<button
	on:click={addNewContactBTN}
	type="button"
	class="text-black bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-transparent dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
	>+ ADD NEW</button
>
<div>
	<div class="relative overflow-x-auto mb-1 sm:rounded-lg">
		<table class="w-full text-sm text-left ">
			<thead class="text-xs uppercase">
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
				{#each $Contacts as contact}
					<tr class=" border-y text-gray-900 dark:border-y-neutral-900">
						<th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">{contact.id}</th>
						<td class="px-6 py-4"> {contact.FirstName} </td>
						<td class="px-6 py-4"> {contact.LastName} </td>
						<td class="px-6 py-4"> {contact.Age} </td>
						<td class="px-6 py-4"> {contact.Email} </td>
						<td class="px-6 py-4"> {contact.Gender} </td>
						<td class="px-6 py-4"> {contact.PhoneNum} </td>
						<td class="px-6 py-4 text-right">
							<button
								on:click={() => EditContactBTN(contact)}
								data-modal-toggle="defaultModal"
								type="button"
								class="text-teal-800 font-medium hover:underline">Edit</button
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div>
		<Pagination />
	</div>
</div>
<Modal />
