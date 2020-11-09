const { relate } = require("../index")

const owners = [{
  id: 1,
  name: "Kyle",
},{
  id: 2,
  name: "Elyse",
}]

const dogs = [{
  id: 1,
  name: "Bixby",
},{
  id: 2,
  name: "Mesa",
}]

const ownerships = [{
  owner_id: 1,
  dog_id: 1,
},{
  owner_id: 1,
  dog_id: 2,
},{
  owner_id: 2,
  dog_id: 2,
}]

const ownersWithRelationships = [{
  id: 1,
  name: "Kyle",
  dogs: [{
    id: 1,
    name: "Bixby",
  },{
    id: 2,
    name: "Mesa",
  }]
},{
  id: 2,
  name: "Elyse",
  dogs: [{
    id: 2,
    name: "Mesa",
  }]
}]

describe("#relate", () => {
  it("relates dogs with owners", () => {
    const result = relate(owners, dogs, ownerships)
    expect(result).toEqual(ownersWithRelationships)
  })
})
