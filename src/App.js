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

  function sortByName() {
    let sortedName = [...contactList];
    // sortedName.sort((a, b) => (a.name > b.name ? 1 : -1));
    sortedName.sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortedName);
  }

  function sortByPopularity() {
    let sortedPop = [...contactList];
    sortedPop.sort((a, b) => b.popularity - a.popularity);
    setContactList(sortedPop);
  }

  return (
    <div className="App">
      <button className="btnRound" onClick={() => addRandomContact()}>
        +
      </button>
      <button className="btn" onClick={() => sortByName()}>
        Sort by Name
      </button>
      <button className="btn" onClick={() => sortByPopularity()}>
        Sort by Popularity
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>
              Name
              {/* <span id="upArrow">&#8679;</span> */}
            </th>
            <th>
              Popularity
              {/* <span id="downArrow">&#8681;</span> */}
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
