// There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. 
// The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). 
// The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. 
// The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

// Implement a function to determine the state of the doors after the last pass. Return the final result in an array,
//  with only the door number included in the array if it is open.


const getDoorsOpen = (numberOfDoors) => {
  const doors = Array.apply(null, { length: numberOfDoors})
    .map(d => d = true);
  
  for (let i=1; i<=numberOfDoors; i++){
    let pass = i;

    for (let j=i - 1; j<numberOfDoors; j+=pass){
      doors[j] = !doors[j];
    }
  }

  const result = doors
    .map((d, i) => {
      if (d === false){
        return d = i + 1;
      }
    })
    .filter(d => typeof d === 'number');

  return result;
}




console.log(getDoorsOpen(100));