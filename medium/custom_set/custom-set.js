/*


*/
class CustomSet {
  constructor(elements = []){
    this.elements = elements;
  }
  /*
    Adds the given element to this set if it is not already included
    Returns this set
  */
  add(element){
    if (!(this.elements.includes(element))) {
      this.elements.push(element);
    }
    return this;
  }
  /*
   Returns true if the set contains the given element
  */
  contains(element){
    return this.elements.includes(element);
  }
  /*
   Returns true if the set is empty, or false if it contains at least one element
  */
  isEmpty(){
    return this.elements.length === 0;
  }
  /*
    Returns a new set containing the intersection of this set and another,
    with all elements that are present in both sets
  */
  intersection(otherSet){
    return new CustomSet(this.elements.filter(element => otherSet.contains(element)));
  } 
  /*
   Returns a new set containing the union of this set and another,
   with all elements that are in either set (inclusive)
  */
  union(otherSet){
    return new CustomSet(this.elements.concat(otherSet.elements));
  }
  /*
    Returns a new set containing the difference between this set and another,
    with the elements present in this set but not the other
  */
  difference(otherSet){
    return new CustomSet(this.elements.filter(element => !(otherSet.contains(element))));
  }
  /*
    Returns true if this set and another set are disjoint,
    with none of the elements in this set present in the other

  */
  isDisjoint(otherSet){
    return this.elements.every(element => !(otherSet.contains(element)));
  }
  /*
   Returns true is this set and another set contain the exact same elements
  */
  isSame(otherSet){
    return this.isSubset(otherSet) && otherSet.isSubset(this);
  }
  /*
    Returns true if this set is a subset of another set,
    with all elements from this set present in the other
  */
  isSubset(otherSet){
    return this.elements.every(element => otherSet.contains(element));
  }
}

module.exports = CustomSet;