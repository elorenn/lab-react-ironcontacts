import "./App.css";
import Contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactList, setContactList] = useState(Contacts.slice(0, 4));
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
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
