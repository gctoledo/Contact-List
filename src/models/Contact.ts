class Contact {
  id: number
  name: string
  number: string
  email: string
  photo: string

  constructor(
    name: string,
    number: string,
    email: string,
    id: number,
    photo: string
  ) {
    this.name = name
    this.number = number
    this.email = email
    this.id = id
    this.photo = photo
  }
}

export default Contact
