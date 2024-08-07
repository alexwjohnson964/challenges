class DNA {
  constructor(strand){
    this.strand = strand;
  }
  hammingDistance(otherStrand) {
    let overlapLength = Math.min(this.strand.length, otherStrand.length);
    let distance = 0;
    for (let i = 0; i < overlapLength; i++) {
      if (this.strand[i] !== otherStrand[i]) {
        distance++;
      }
    }
  return distance;
  }
}
module.exports = DNA;