import express from "express"
import Jwt from "jsonwebtoken"

import cors from "cors"
app.use(cors());
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express();
import path from 'path';

app.use(express.json())

app.get("/",(req,res)=>{
  res.send("hello")

})

app.get("/ran",(req,res)=>{
  res.send([
    {
      "_id": "66cdb2c86e7a3099dc83d2e5",
      "index": 0,
      "guid": "1d034e2c-049f-462a-b455-bddbeac16f0b",
      "isActive": false,
      "balance": "$3,355.99",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "green",
      "name": "Daugherty Page",
      "gender": "male",
      "company": "PHOTOBIN",
      "email": "daughertypage@photobin.com",
      "phone": "+1 (946) 479-3141",
      "address": "698 Chester Avenue, Needmore, Wyoming, 6244",
      "about": "Velit deserunt aliquip eu nostrud incididunt do duis occaecat labore ut et ad adipisicing laboris. Ad elit excepteur sint ea. Labore nulla sit esse sunt in enim laboris irure pariatur. Non reprehenderit sint proident est enim do quis exercitation duis. Quis laborum Lorem ad enim pariatur esse. Dolore magna laboris minim nulla amet.\r\n",
      "registered": "2015-04-05T12:56:21 -06:-30",
      "latitude": -50.958791,
      "longitude": 156.047092,
      "tags": [
        "ipsum",
        "amet",
        "magna",
        "consectetur",
        "tempor",
        "pariatur",
        "pariatur"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Welch Mann"
        },
        {
          "id": 1,
          "name": "Waller Melton"
        },
        {
          "id": 2,
          "name": "Lottie Hampton"
        }
      ],
      "greeting": "Hello, Daugherty Page! You have 7 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "66cdb2c84470b736359ae19a",
      "index": 1,
      "guid": "93080735-d5f0-46c3-88aa-6360fc0c3a5c",
      "isActive": true,
      "balance": "$2,751.00",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "brown",
      "name": "Jasmine Clark",
      "gender": "female",
      "company": "HATOLOGY",
      "email": "jasmineclark@hatology.com",
      "phone": "+1 (976) 422-2983",
      "address": "449 Union Street, Dexter, Alaska, 2615",
      "about": "Ea ullamco id nostrud elit culpa veniam. Exercitation fugiat duis ea eu nisi aliqua. Ipsum id eiusmod in qui sunt nostrud sint exercitation ea. Amet labore nostrud dolore consequat et magna sit culpa consectetur fugiat do tempor. Anim ad voluptate aliquip sit nisi reprehenderit. Voluptate eiusmod Lorem eu Lorem do proident enim cupidatat non veniam culpa id aliquip.\r\n",
      "registered": "2019-03-10T02:20:04 -06:-30",
      "latitude": 19.219721,
      "longitude": 69.004884,
      "tags": [
        "aliquip",
        "voluptate",
        "et",
        "officia",
        "minim",
        "ex",
        "labore"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Rosetta Wynn"
        },
        {
          "id": 1,
          "name": "Kate Wolfe"
        },
        {
          "id": 2,
          "name": "Bailey Thornton"
        }
      ],
      "greeting": "Hello, Jasmine Clark! You have 2 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "66cdb2c881b94807816f105c",
      "index": 2,
      "guid": "e28de9ed-efe5-4a50-a8f5-2e374188c086",
      "isActive": true,
      "balance": "$2,664.78",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "eyeColor": "blue",
      "name": "Jenifer Harrell",
      "gender": "female",
      "company": "SOPRANO",
      "email": "jeniferharrell@soprano.com",
      "phone": "+1 (852) 600-3331",
      "address": "375 Desmond Court, Draper, Oklahoma, 9757",
      "about": "Aliqua et consectetur in pariatur duis esse tempor consequat ut. Exercitation nulla fugiat non est voluptate mollit. Qui culpa consectetur laboris voluptate. Dolor do laboris culpa consequat consectetur consectetur consectetur. Nulla excepteur eu consectetur laboris ut. Minim occaecat id amet laborum laborum.\r\n",
      "registered": "2015-09-11T07:04:34 -06:-30",
      "latitude": 57.243949,
      "longitude": -67.383371,
      "tags": [
        "cillum",
        "consectetur",
        "ipsum",
        "occaecat",
        "elit",
        "aute",
        "est"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Rivera Schroeder"
        },
        {
          "id": 1,
          "name": "Bauer Bowman"
        },
        {
          "id": 2,
          "name": "Webb Owen"
        }
      ],
      "greeting": "Hello, Jenifer Harrell! You have 10 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "66cdb2c8e85cb6c30443b424",
      "index": 3,
      "guid": "edf2d839-4b5c-44b6-868a-ebfa35512b9f",
      "isActive": false,
      "balance": "$1,335.10",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "green",
      "name": "Celia Lopez",
      "gender": "female",
      "company": "OVIUM",
      "email": "celialopez@ovium.com",
      "phone": "+1 (859) 590-2889",
      "address": "947 Osborn Street, Malott, Texas, 4230",
      "about": "Nulla magna ea sunt deserunt ullamco quis laborum cupidatat culpa commodo. Tempor exercitation consequat non et reprehenderit aliqua nulla deserunt et do magna sit fugiat ex. Laborum occaecat sunt dolore Lorem adipisicing sint adipisicing voluptate ut id. Anim magna consequat tempor aute adipisicing.\r\n",
      "registered": "2018-08-10T08:19:34 -06:-30",
      "latitude": 15.170423,
      "longitude": -39.294551,
      "tags": [
        "duis",
        "sunt",
        "occaecat",
        "nostrud",
        "enim",
        "pariatur",
        "sunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Wendy Michael"
        },
        {
          "id": 1,
          "name": "Shanna Riddle"
        },
        {
          "id": 2,
          "name": "Craig Vance"
        }
      ],
      "greeting": "Hello, Celia Lopez! You have 4 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "66cdb2c83c367ecc2a7ffdd9",
      "index": 4,
      "guid": "3e385de6-00d2-4940-8141-600e80c9ec7a",
      "isActive": true,
      "balance": "$1,129.51",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "brown",
      "name": "Charmaine Espinoza",
      "gender": "female",
      "company": "SEQUITUR",
      "email": "charmaineespinoza@sequitur.com",
      "phone": "+1 (844) 527-3074",
      "address": "865 Kossuth Place, Fulford, New Jersey, 5853",
      "about": "Deserunt dolore elit nisi duis Lorem duis. Irure qui enim ex nisi reprehenderit sunt. Aute eiusmod ex do proident quis magna cupidatat labore voluptate magna. Anim sunt sit ullamco reprehenderit ea incididunt. Quis laboris velit sit mollit Lorem proident duis do mollit irure veniam. Eu irure exercitation do ut dolor exercitation ea Lorem sunt eu consequat quis sit.\r\n",
      "registered": "2023-06-14T06:03:05 -06:-30",
      "latitude": 52.308758,
      "longitude": 42.080156,
      "tags": [
        "occaecat",
        "cupidatat",
        "Lorem",
        "est",
        "eiusmod",
        "eu",
        "Lorem"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Desiree Dean"
        },
        {
          "id": 1,
          "name": "Zelma Chase"
        },
        {
          "id": 2,
          "name": "Robles Nguyen"
        }
      ],
      "greeting": "Hello, Charmaine Espinoza! You have 7 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "66cdb2c89b813854578cae8b",
      "index": 5,
      "guid": "d6c08eed-4f83-490a-bfa3-ac8fb8ee8f6b",
      "isActive": true,
      "balance": "$1,241.80",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "green",
      "name": "Crawford Pope",
      "gender": "male",
      "company": "ZENTIA",
      "email": "crawfordpope@zentia.com",
      "phone": "+1 (875) 540-2016",
      "address": "457 Stockton Street, Vincent, Northern Mariana Islands, 9231",
      "about": "Aliquip consectetur dolore quis fugiat nulla. Ad esse et sit anim cupidatat adipisicing ex sunt pariatur. Nisi proident eiusmod commodo est pariatur officia ea aliquip sint mollit adipisicing cillum qui. Qui nostrud voluptate deserunt id sunt nisi incididunt duis fugiat sit amet et laboris.\r\n",
      "registered": "2021-01-21T11:01:48 -06:-30",
      "latitude": -89.643006,
      "longitude": 43.633498,
      "tags": [
        "amet",
        "commodo",
        "tempor",
        "nulla",
        "minim",
        "magna",
        "irure"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Newton Keller"
        },
        {
          "id": 1,
          "name": "Lucille Blackwell"
        },
        {
          "id": 2,
          "name": "Hooper Rasmussen"
        }
      ],
      "greeting": "Hello, Crawford Pope! You have 5 unread messages.",
      "favoriteFruit": "strawberry"
    }
  ])

})

app.post("/api/signup", async (req, res)=>{
  const body=req.body
  console.log(body)
  try{
    const user= await prisma.Userr.create({
      data:{
       name: body.name,
       password:body.password,
       email:body.email
      }
      })
      const token=Jwt.sign({ user}, "monkey", {
        expiresIn: "30d",
      })
      res.json({"token":token,"userid":user.id})
  }
  catch(e){
    console.log(e);
    res.status(411);
    res.send('Invalid')

  }

 
});


app.post("/api/signin", async (req, res)=>{
  const body =req.body
  console.log(body)
  try{
    const user = await prisma.Userr.findFirst({
      where: {
        email: body.email,
        password: body.password,
      }
    })

    if (!user) {
      res.status(403);
      return res.json({
        message: "Incorrect creds"
      })
    }
    const token=Jwt.sign({ user}, "monkey", {
      expiresIn: "30d",
    })
    res.json({"token":token,"userid":user.id})
    
  }
  catch(e){
    console.log(e);
    res.send('Invalid')

  }

});

app.get("/api/getallblogs", async (req,res)=>{
  console.log("bbbb")
  try{
    const blogs = await prisma.Blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
            select: {
                name: true
            }
        }
    }
    })
    return res.json({
      blogs
  })

  }
  catch(e){

  }

})

app.post("/api/createblog/", async (req,res)=>{
  const body=req.body
  console.log(body)
  try{
    const blog = await prisma.Blog.create({
      data: {
          title: body.title,
          content: body.content,
          authorId: Number(body.userid)
      }
  })

  return res.json({
      id: blog.id
  })

  }
  catch(e){
    console.log(e)

  }

})

app.get("/api/singleblog/:id", async (req,res)=>{
  const id=req.params.id
  console.log(id)
  try{
    const blog=await prisma.Blog.findFirst({
      where :{
        id:Number(id)
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
            select: {
                name: true
            }
        }
    }
    })
    res.json(blog)

  }
  catch(e){
    console.log(e)

  }

})

app.put("/api/updateblog/" ,async (req,res)=>{
  const body =req.body
  console.log(body)
  try{
    const blog = await prisma.Blog.update({
      where: {
          id: Number(body.id)
      }, 
      data: {
          title: body.title,
          content: body.description
      }
  })

  return res.json({
      blog
  })

  }
  catch(e){
    console.log(e)

  }

})


app.delete("/api/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)

  try {
    const like = await prisma.Blog.delete({
      where:{
        id: Number(id),
      }
    });
    res.status(200).json({ message: ' deleted successfully', like });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting' });
  }
});






app.listen(3009,()=>{
  console.log("server started")
})





