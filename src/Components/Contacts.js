import ContactUserCard from "./ContactUserCard"

const Contacts = () => {
    let contacts = [];
    for (let i = 0; i<10; i++){
        contacts.push(<ContactUserCard/>);
    }
    return (
        <div class="Contacts">
        [Contacts]
        {contacts}
        </div>
    )
}

export default Contacts;