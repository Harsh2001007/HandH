import React, { useEffect, useState } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firbase/firebaseInit";

function FirestoreTest() {
  const querysnaps = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "user_data"));

      querySnapshot.forEach((doc) => {
        // const fdata = doc.data();
        // console.log(fdata);
        console.log(doc.data());
      });

      console.log(querySnapshot);
    } catch (error) {
      console.log("Error fetching Firestore data:", error);
    }
  };

  return (
    <>
      <div>
        <button onClick={querysnaps}>firestore</button>
      </div>
    </>
  );
}

export default FirestoreTest;
