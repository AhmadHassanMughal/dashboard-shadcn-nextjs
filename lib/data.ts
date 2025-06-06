export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  username: string
}

export async function getData(): Promise<Payment[]> {
  // This is where you would typically fetch data from an API
  // For now, we'll return mock data
  return [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
        username: "mike_doe",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
        username: "john_smith",
      },
      {
        id: "a7b3c9d1",
        amount: 250,
        status: "success",
        email: "sarah.j@outlook.com",
        username: "sarah_j",
      },
      {
        id: "e5f2g8h4",
        amount: 75,
        status: "failed",
        email: "david.m@gmail.com",
        username: "david_miller",
      },
      {
        id: "i9j6k3l7",
        amount: 300,
        status: "success",
        email: "emma.w@yahoo.com",
        username: "emma_wilson",
      },
      {
        id: "m4n1p8q5",
        amount: 150,
        status: "processing",
        email: "alex.b@hotmail.com",
        username: "alex_brown",
      },
      {
        id: "r2s9t6u3",
        amount: 200,
        status: "pending",
        email: "lisa.c@gmail.com",
        username: "lisa_chen",
      },
      {
        id: "v7w4x1y8",
        amount: 175,
        status: "success",
        email: "tom.h@outlook.com",
        username: "tom_harris",
      },
      {
        id: "z5a2b9c6",
        amount: 225,
        status: "failed",
        email: "anna.k@yahoo.com",
        username: "anna_kim",
      },
      {
        id: "d3e0f7g4",
        amount: 125,
        status: "processing",
        email: "ryan.l@gmail.com",
        username: "ryan_lee",
      },
      {
        id: "h1i8j5k2",
        amount: 275,
        status: "success",
        email: "sophie.m@hotmail.com",
        username: "sophie_martin",
      },
      {
        id: "l9m6n3o0",
        amount: 150,
        status: "pending",
        email: "james.p@outlook.com",
        username: "james_parker",
      },
      {
        id: "p7q4r1s8",
        amount: 325,
        status: "success",
        email: "olivia.t@yahoo.com",
        username: "olivia_taylor",
      },
      {
        id: "t5u2v9w6",
        amount: 100,
        status: "failed",
        email: "daniel.x@gmail.com",
        username: "daniel_xu",
      },
      {
        id: "x3y0z7a4",
        amount: 200,
        status: "processing",
        email: "mia.b@hotmail.com",
        username: "mia_baker",
      },
      {
        id: "b1c8d5e2",
        amount: 250,
        status: "success",
        email: "william.f@outlook.com",
        username: "william_ford",
      },
      {
        id: "f9g6h3i0",
        amount: 175,
        status: "pending",
        email: "ava.j@yahoo.com",
        username: "ava_jackson",
      },
      {
        id: "j7k4l1m8",
        amount: 300,
        status: "success",
        email: "ethan.n@gmail.com",
        username: "ethan_nelson",
      },
      {
        id: "n5o2p9q6",
        amount: 125,
        status: "failed",
        email: "isabella.r@hotmail.com",
        username: "isabella_ross",
      },
      {
        id: "r3s0t7u4",
        amount: 225,
        status: "processing",
        email: "mason.v@outlook.com",
        username: "mason_vaughn",
      },
      {
        id: "v1w8x5y2",
        amount: 150,
        status: "success",
        email: "charlotte.z@yahoo.com",
        username: "charlotte_zhang",
      },
      {
        id: "z9a6b3c0",
        amount: 275,
        status: "pending",
        email: "noah.d@gmail.com",
        username: "noah_davis",
      },
      {
        id: "d7e4f1g8",
        amount: 200,
        status: "success",
        email: "amelia.h@hotmail.com",
        username: "amelia_hall",
      },
      {
        id: "h5i2j9k6",
        amount: 175,
        status: "failed",
        email: "lucas.l@outlook.com",
        username: "lucas_lewis",
      },
      {
        id: "l3m0n7o4",
        amount: 250,
        status: "processing",
        email: "harper.p@yahoo.com",
        username: "harper_parker",
      },
      {
        id: "p1q8r5s2",
        amount: 300,
        status: "success",
        email: "elijah.t@gmail.com",
        username: "elijah_thomas",
      },
      {
        id: "t9u6v3w0",
        amount: 125,
        status: "pending",
        email: "abigail.x@hotmail.com",
        username: "abigail_xu",
      },
      {
        id: "w7x4y1z8",
        amount: 225,
        status: "success",
        email: "alexander.b@outlook.com",
        username: "alexander_baker",
      },
      {
        id: "z5a2b9c6",
        amount: 150,
        status: "failed",
        email: "emily.d@yahoo.com",
        username: "emily_davis",
      },
      {
        id: "c3d0e7f4",
        amount: 275,
        status: "processing",
        email: "michael.f@gmail.com",
        username: "michael_ford",
      },
      {
        id: "f1g8h5i2",
        amount: 200,
        status: "success",
        email: "madison.j@hotmail.com",
        username: "madison_jackson",
      },
      {
        id: "i9j6k3l0",
        amount: 175,
        status: "pending",
        email: "benjamin.l@outlook.com",
        username: "benjamin_lee",
      },
      {
        id: "l7m4n1o8",
        amount: 250,
        status: "success",
        email: "elizabeth.p@yahoo.com",
        username: "elizabeth_parker",
      },
      {
        id: "o5p2q9r6",
        amount: 300,
        status: "failed",
        email: "sebastian.s@gmail.com",
        username: "sebastian_smith",
      },
      {
        id: "r3s0t7u4",
        amount: 125,
        status: "processing",
        email: "victoria.v@hotmail.com",
        username: "victoria_vaughn",
      },
      {
        id: "u1v8w5x2",
        amount: 225,
        status: "success",
        email: "jack.w@outlook.com",
        username: "jack_wilson",
      },
      {
        id: "x9y6z3a0",
        amount: 150,
        status: "pending",
        email: "sophia.z@yahoo.com",
        username: "sophia_zhang",
      },
      {
        id: "a7b4c1d8",
        amount: 275,
        status: "success",
        email: "owen.d@gmail.com",
        username: "owen_davis",
      },
      {
        id: "d5e2f9g6",
        amount: 200,
        status: "failed",
        email: "ava.f@hotmail.com",
        username: "ava_ford",
      },
      {
        id: "g3h0i7j4",
        amount: 175,
        status: "processing",
        email: "gabriel.j@outlook.com",
        username: "gabriel_jackson",
      },
      {
        id: "j1k8l5m2",
        amount: 250,
        status: "success",
        email: "scarlett.l@yahoo.com",
        username: "scarlett_lee",
      },
      {
        id: "m9n6o3p0",
        amount: 300,
        status: "pending",
        email: "henry.p@gmail.com",
        username: "henry_parker",
      },
      {
        id: "p7q4r1s8",
        amount: 125,
        status: "success",
        email: "chloe.s@hotmail.com",
        username: "chloe_smith",
      },
      {
        id: "s5t2u9v6",
        amount: 225,
        status: "failed",
        email: "leo.v@outlook.com",
        username: "leo_vaughn",
      },
      {
        id: "v3w0x7y4",
        amount: 150,
        status: "processing",
        email: "luna.w@yahoo.com",
        username: "luna_wilson",
      },
      {
        id: "y1z8a5b2",
        amount: 275,
        status: "success",
        email: "theodore.z@gmail.com",
        username: "theodore_zhang",
      },
      {
        id: "b9c6d3e0",
        amount: 200,
        status: "pending",
        email: "penelope.d@hotmail.com",
        username: "penelope_davis",
      },
      {
        id: "e7f4g1h8",
        amount: 175,
        status: "success",
        email: "hudson.f@outlook.com",
        username: "hudson_ford",
      },
      {
        id: "h5i2j9k6",
        amount: 250,
        status: "failed",
        email: "layla.j@yahoo.com",
        username: "layla_jackson",
      },
      {
        id: "k3l0m7n4",
        amount: 300,
        status: "processing",
        email: "grayson.l@gmail.com",
        username: "grayson_lee",
      },
      {
        id: "n1o8p5q2",
        amount: 125,
        status: "success",
        email: "nora.p@hotmail.com",
        username: "nora_parker",
      },
      {
        id: "q9r6s3t0",
        amount: 225,
        status: "pending",
        email: "julian.s@outlook.com",
        username: "julian_smith",
      },
      {
        id: "t7u4v1w8",
        amount: 150,
        status: "success",
        email: "aurora.v@yahoo.com",
        username: "aurora_vaughn",
      },
      {
        id: "w5x2y9z6",
        amount: 275,
        status: "failed",
        email: "aaron.w@gmail.com",
        username: "aaron_wilson",
      },
      {
        id: "z3a0b7c4",
        amount: 200,
        status: "processing",
        email: "clara.z@hotmail.com",
        username: "clara_zhang",
      },
      {
        id: "c1d8e5f2",
        amount: 175,
        status: "success",
        email: "elias.d@outlook.com",
        username: "elias_davis",
      },
      {
        id: "f9g6h3i0",
        amount: 250,
        status: "pending",
        email: "violet.f@yahoo.com",
        username: "violet_ford",
      },
  ]
} 

export type Currency = {
  locale: string
  currency: string
  name: string
}

export const currencies: Currency[] = [
  {
    locale: "en-US",
    currency: "USD",
    name: "US Dollar"
  },
  {
    locale: "en-GB",
    currency: "GBP",
    name: "British Pound"
  },
  {
    locale: "en-PK",
    currency: "PKR",
    name: "Pakistani Rupee"
  },
  {
    locale: "en-IN",
    currency: "INR",
    name: "Indian Rupee"
  },
  {
    locale: "en-AU",
    currency: "AUD",
    name: "Australian Dollar"
  },
  {
    locale: "en-CA",
    currency: "CAD",
    name: "Canadian Dollar"
  },
  {
    locale: "en-SG",
    currency: "SGD",
    name: "Singapore Dollar"
  },
  {
    locale: "en-NZ",
    currency: "NZD",
    name: "New Zealand Dollar"
  },
  {
    locale: "en-ZA",
    currency: "ZAR",
    name: "South African Rand"
  },
  {
    locale: "en-HK",
    currency: "HKD",
    name: "Hong Kong Dollar"
  },
  {
    locale: "en-MY",
    currency: "MYR",
    name: "Malaysian Ringgit"
  },
  {
    locale: "en-PH",
    currency: "PHP",
    name: "Philippine Peso"
  },
  {
    locale: "en-ID",
    currency: "IDR",
    name: "Indonesian Rupiah"
  },
  {
    locale: "en-TH",
    currency: "THB",
    name: "Thai Baht"
  },
  {
    locale: "en-VN",
    currency: "VND",
    name: "Vietnamese Dong"
  },
  {
    locale: "en-BD",
    currency: "BDT",
    name: "Bangladeshi Taka"
  },
  {
    locale: "en-LK",
    currency: "LKR",
    name: "Sri Lankan Rupee"
  },
  {
    locale: "en-NP",
    currency: "NPR",
    name: "Nepalese Rupee"
  },
  {
    locale: "en-MM",
    currency: "MMK",
    name: "Myanmar Kyat"
  },
  {
    locale: "en-KH",
    currency: "KHR",
    name: "Cambodian Riel"
  },
  {
    locale: "en-BN",
    currency: "BND",
    name: "Brunei Dollar"
  },
  {
    locale: "en-FJ",
    currency: "FJD",
    name: "Fijian Dollar"
  },
  {
    locale: "en-PG",
    currency: "PGK",
    name: "Papua New Guinean Kina"
  },
  {
    locale: "en-SB",
    currency: "SBD",
    name: "Solomon Islands Dollar"
  },
  {
    locale: "en-VU",
    currency: "VUV",
    name: "Vanuatu Vatu"
  },
  {
    locale: "en-WS",
    currency: "WST",
    name: "Samoan Tala"
  },
  {
    locale: "en-TO",
    currency: "TOP",
    name: "Tongan Pa'anga"
  },
  {
    locale: "en-CK",
    currency: "NZD",
    name: "Cook Islands Dollar"
  },
  {
    locale: "en-NU",
    currency: "NZD",
    name: "Niue Dollar"
  },
  {
    locale: "en-TK",
    currency: "NZD",
    name: "Tokelau Dollar"
  },
  {
    locale: "en-PW",
    currency: "USD",
    name: "Palauan Dollar"
  },
  {
    locale: "en-FM",
    currency: "USD",
    name: "Micronesian Dollar"
  },
  {
    locale: "en-MH",
    currency: "USD",
    name: "Marshall Islands Dollar"
  },
  {
    locale: "en-KI",
    currency: "AUD",
    name: "Kiribati Dollar"
  },
  {
    locale: "en-TV",
    currency: "AUD",
    name: "Tuvaluan Dollar"
  },
  {
    locale: "en-NR",
    currency: "AUD",
    name: "Nauruan Dollar"
  }
]




