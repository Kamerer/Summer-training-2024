function unique(arr) {
    let set = new Set(arr);
    // let newArr = [];
    // for (let element of set) {
    //     newArr.push(element);
    // }
    return Array.from(set);
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare,Krishna,:-O