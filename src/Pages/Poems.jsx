import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../config/FirebaseConfig"

export function Poems() {

  const [poems, setPoems] = useState([])
  useEffect(() => {
      const fetchPoems = async () => {
        try {
          const snapshot = await getDocs(collection(db, "poems"));
          const poemsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPoems(poemsData)
        } catch (error) {
          console.log("There's a freaking error!! You dummy", error)
        }
      }
      fetchPoems();
    }, [])
  return (
    <div id="data">
      {poems.length > 0 ?
        poems.map((poem) => (
            <div className="poem-card" key={poem.id}>
              <h1 className="poem-name">{poem.poemName}</h1>
              <p className="poem-date">Published <span className="date-text">{poem.poemDate}</span></p>
              <hr/>
              <pre className="poem-text">{poem.poemText.replace(/<br\s*\/?>/g, "\n")}</pre>

            </div>  
        )) :
          <p id="loading-poems">Loading Poems</p>}
    </div>
  )
}