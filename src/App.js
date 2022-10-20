import "./App.css";
import Contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactList, setContactList] = useState(Contacts.slice(0, 5));

  function addRandomContact() {
    let randomContact = Contacts[Math.floor(Math.random() * Contacts.length)];

    if (contactList.includes(randomContact)) {
      addRandomContact();
    } else {
      let newContacts = [randomContact, ...contactList];
      setContactList(newContacts);
    }
  }

  return (
    <div className="App">
      <button className="btnRound" onClick={() => addRandomContact()}>
        +
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>
              Name <span id="upArrow">&#8679;</span>
            </th>
            <th>
              Popularity <span id="downArrow">&#8681;</span>
            </th>
            <th>
              Won<br></br>Oscar
            </th>
            <th>
              Won<br></br>Emmy
            </th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={`${contact.name} headshot`}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
