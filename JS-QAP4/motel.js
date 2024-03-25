// Description: A program for Motel Customers
// Author: Daniel Bowers
// Date: March 20, 2024

const motelCustomer = {
  firstName: "Bob",
  lastName: "Benson",
  birthDate: "1980-01-02",
  gender: "Male",
  roomPreferences: [
    "King Bed",
    "Harborview",
    "Extra rollaway bed",
    "Mini-Fridge",
  ],
  paymentMethod: "Visa",
  mailingAddress: {
    street: "12 Main St.",
    city: "Manuels",
    postalCode: "B3M2X7",
    province: "NL",
    country: "Canada",
  },
  phoneNumber: "7095790000",
  reservationDates: {
    checkinDate: "2024-03-03",
    checkoutDate: "2024-03-10",
  },
  calculateAge: function () {
    const today = new Date();
    const birthDate = new Date(this.birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age - 1;
    }
    return age;
  },
  calculatestayDuration: function () {
    const checkinDate = new Date(this.reservationDates.checkinDate);
    const checkoutDate = new Date(this.reservationDates.checkoutDate);
    const duration = Math.ceil(
      (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)
    );
    return duration;
  },
  customerDescription: function () {
    const customerAge = this.calculateAge();
    const durationofStay = this.calculatestayDuration();
    return `Customer Name is ${this.firstName} ${
      this.lastName
    } and customer age is ${customerAge}. customer gender is ${
      this.gender
    } and customer room preferences are ${this.roomPreferences.join(
      ", "
    )}. Their payment method is ${
      this.paymentMethod
    } and their mailing address is ${this.mailingAddress.street}, ${
      this.mailingAddress.city
    }, ${this.mailingAddress.postalCode}, ${this.mailingAddress.province}, ${
      this.mailingAddress.country
    }. Their phone number is ${this.phoneNumber}. Their check-in date is ${
      this.reservationDates.checkinDate
    }, and their check out date is ${
      this.reservationDates.checkoutDate
    }, and the duration of their stay is ${durationofStay} days. `;
  },
};
console.log(motelCustomer);
console.log(motelCustomer.customerDescription());
