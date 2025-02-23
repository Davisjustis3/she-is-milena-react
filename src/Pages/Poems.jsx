import { collection, getDocs, query, orderBy} from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { db } from "../config/FirebaseConfig";
import { motion, useInView } from "framer-motion";

export function Poems(props) {
  const [poems, setPoems] = useState([]);
  const { handlePoemDisplay } = props
  
  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const poemsCollection = collection(db, "poems");
        const q = query(poemsCollection, orderBy("poemDate", "desc"));
        const snapshot = await getDocs(q);
        const poemsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPoems(poemsData);
      } catch (error) {
        console.log("There's a freaking error!! You dummy", error);
      }
    };
    fetchPoems();
  }, []);

  return (
    <div id="data" className="flex items-center gap-6 p-6">
      {poems.length > 0 ? (
        poems.map((poem) =>
          <AnimatedPoem
          key={poem.id}
            poem={poem}
            handlePoemDisplay={handlePoemDisplay}
          />
        )
      ) : (
        <p id="loading-poems">Loading Poems...</p>
      )}
    </div>
  );
}

function AnimatedPoem({ poem, handlePoemDisplay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="poem-card bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl"
    >
      <button
        className="read-more"
        onClick={() => handlePoemDisplay(poem)}
      >Read More</button>
      <h1 className="poem-name font-bold text-xl">{poem.poemName}</h1>
      <p className="poem-date text-gray-500">
        Published <span className="date-text">{poem.poemDate}</span>
      </p>
      <hr />
      <pre className="poem-text text-gray-700">{poem.poemText.replace(/<br\s*\/?>/g, "\n")}</pre>
    </motion.div>
  );
}
