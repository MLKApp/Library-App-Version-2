var TYPES = {PLACE: 1, SERVICE: 2, ROOM: 3, COLLECTION: 4};

var locations = [
  
//Restrooms
  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: -1,
    floorname: "Lower Level",
    x: 37.335462, y: -121.885356
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 1,
    floorname: "1st Floor",
    x: 37.335462, y: -121.885350
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 1,
    floorname: "1st Floor",
    x: 37.335775, y: -121.884975
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 1,
    floorname: "1st Floor",
    x: 37.335480, y:-121.884662
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 2,
    floorname: "2nd Floor",
    x: 37.335486, y: -121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 2,
    floorname: "2nd Floor",
    x: 37.335462, y: -121.885354
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 3,
    floorname: "3rd Floor",
    x: 37.335486, y: -121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 3,
    floorname: "3rd Floor",
    x: 37.335462, y: -121.885354
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 4,
    floorname: "4th Floor",
    x: 37.335486, y: -121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 5,
    floorname: "5th Floor",
    x: 37.335486, y: -121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 6,
    floorname: "6th Floor",
    x: 37.335486, y: -121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 7,
    floorname: "7th Floor",
    x: 37.335486, y: 121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 8,
    floor: "8th Floor",
    x: 37.335486, y: 121.884657
  },


//Library Services, Desks, and Areas

  //Printing
  {
    type: TYPES.SERVICE,
    name: "Printing",
    floor: -1,
    floorname: "Lower Level",
    x: 37.335518, y: -121.885094,
    desc: "You can print from any library computer, USB, or laptop.",
    image: "images/photos/Printing-small.jpg",
    linkText: "Learn more about printing in the King Library.",
    linkTarget: "http://library.sjsu.edu/video/printing-king-library"
  },

  {
    type: TYPES.SERVICE,
    name: "Printing",
    floor: 0,
    floorname: "Mezzanine",
    x: 37.335750, y: -121.885224,
    desc: "You can print from any library computer, USB, or laptop.",
    image: "images/photos/Printing-small.jpg",
    linkText: "Learn more about printing in the King Library.",
    linkTarget: "http://library.sjsu.edu/video/printing-king-library"
  },
  
  {
    type: TYPES.SERVICE,
    name: "Printing",
    floor: 1,
    floorname: "1st Floor",
    x: 37.335567, y: -121.885102,
    desc: "You can print from any library computer, USB, or laptop.",
    image: "images/photos/Printing-small.jpg",
    linkText: "Learn more about printing in the King Library.",
    linkTarget: "http://library.sjsu.edu/video/printing-king-library"
  },  

  {
    type: TYPES.SERVICE,
    name: "Printing",
    floor: 2,
    floorname: "2nd Floor",
    x: 37.335506, y: -121.885252,
    desc: "You can print from any library computer, USB, or laptop.",
    image: "images/photos/Printing-small.jpg",
    linkText: "Learn more about printing in the King Library.",
    linkTarget: "http://library.sjsu.edu/video/printing-king-library"
  },

  {
    type: TYPES.SERVICE,
    name: "Printing",
    floor: 5,
    floorname: "5th Floor",
    x: 37.335375, y: -121.884882,
    desc: "You can print from any library computer, USB, or laptop.",
    image: "images/photos/Printing-small.jpg",
    linkText: "Learn more about printing in the King Library.",
    linkTarget: "http://library.sjsu.edu/video/printing-king-library"
  },

  //Mezzanine
    {
      type: TYPES.PLACE,
      name: "Mezzanine",
      floor: 0,
      floorname: "Mezzanine",
      x: 37.335648, y: -121.885165,
      desc: "Student Learning and Research Commons is located above the Children's Room.",
      image: "images/photos/Mezzanine-small.jpg",
      linkText: "Learn more about the Mezz on the King website.",
      linkTarget: "http://library.sjsu.edu/mezz/sjsu-student-learning-and-research-commons"
    }, 
      
  //Student Computing Services
    {
      type: TYPES.SERVICE,
      name: "Student Computing Services - Laptops and iPads",
      floor: 0,
      floorname: "Mezzanine",
      x: 37.335646, y: -121.885103,
      desc: "Free checkout of PC laptops, MacBook Pros and iPads using your SJSU Tower Card.",
      image: "images/photos/LaptopsandiPads-small.jpg"
    }, 

    {
      type: TYPES.SERVICE,
      name: "Student Computing Services - Laptops and iPads",
      floor: 4,
      floorname: "4th Floor",
      x: 37.335342, y: -121.884824, 
      desc: "Free checkout of PC laptops, MacBook Pros and iPads using your SJSU Tower Card.",
      image: "images/photos/LaptopsandiPads-small.jpg"
    },  

  //Student Technology Training
    {
      type: TYPES.SERVICE,
      name: "Student Technology Training",
      floor: 4,
      floorname: "4th Floor",
      x: 37.335354, y: -121.884780,
      desc: "The Student Technology Training Center provides training, workshops and drop-in help with software such as Excel and SPSS.",
      image: "images/photos/TechTraining-small.jpg"  
    },

  //Desks
    {
      type: TYPES.PLACE,
      name: "Circulation Desk",
      floor: 1,
      floorname: "1st Floor",
      x: 37.335360, y: -121.885028,
      desc: "Check out materials or get help with your library account.",
      image: "images/photos/CircDesk-small.jpg"
    },

    {
      type: TYPES.PLACE,
      name: "Reference Desk",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335538, y: -121.885172,
      desc: "Get help with your research needs.",
      image: "images/photos/RefDesk-small.jpg"
    },

    {
      type: TYPES.PLACE,
      name: "Reference Desk",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335538, y: -121.885172,
      desc: "Get help with your research needs.",
      image: "images/photos/RefDesk-small.jpg"
    },


 //Group, Study, Meeting, and Classrooms
   //Lower Level
    {
      type: TYPES.ROOM,
      name: "Study Room L02",
      floor: -1,
      floorname: "Lower Level",
      x: 37.335776, y: -121.885040,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },  
  
    {
      type: TYPES.ROOM,
      name: "Study Room L04",
      floor: -1,
      floorname: "Lower Level",
      x: 37.335801, y: -121.885079,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },
  
    {
      type: TYPES.ROOM,
      name: "Study Room L67",
      floor: -1,
      floorname: "Lower Level",
      x: 37.335431, y: -121.884799,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },

  //1st Floor
    {
      type: TYPES.ROOM,
      name: "Classroom 125",
      floor: 1,
      floorname: "1st Floor",
      x: 37.335410, y: -121.884567,
      desc: "Classroom",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },
    
  
  //2nd Floor
    {
      type: TYPES.ROOM,
      name: "Classroom 213",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335410, y: -121.884567,
      desc: "Classroom",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.ROOM,
      name: "Classroom 217",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335339, y: -121.884651,
      desc: "Classroom",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.ROOM,
      name: "Classroom 219",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335394, y: -121.884731,
      desc: "Classroom",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.ROOM,
      name: "Meeting Room 224",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335684, y: -121.885109,
      desc: "Meeting Room",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.ROOM,
      name: "Classroom 226",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335713, y: -121.885141,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },

  
  //3rd Floor

    {
      type: TYPES.ROOM,
      name: "Study Rooms 322, 324, 326",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335684, y: -121.885109,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.ROOM,
      name: "Study Room 390, 392",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335375, y: -121.885291,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },
  
 //6th Floor
 
     {
      type: TYPES.ROOM,
      name: "Study Room 602, 604, 606, 622, 624, 626",
      floor: 6,
      floorname: "6th Floor",
      x: 37.335723, y: -121.885126,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },
    
    {
      type: TYPES.ROOM,
      name: "Study Room 632, 634, 662, 664",
      floor: 6,
      floorname: "6th Floor",
      x: 37.335429, y: -121.885341,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },    
  
  //7th Floor
    
    {
      type: TYPES.ROOM,
      name: "Study Room 702, 704, 706, 722, 724, 726",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335720, y: -121.885073,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.ROOM,
      name: "Study Room 732, 734, 762, 764",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335400, y: -121.885358,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    }, 

  //8th Floor
    {
      type: TYPES.ROOM,
      name: "Study Room 802, 804, 806, 822, 824, 826",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335720, y: -121.885069,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    }, 

    {
      type: TYPES.ROOM,
      name: "Study Room 832, 834, 862, 864",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335397, y: -121.885358,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linkText: "",
      linkTarget: ""
    },

//Books By Collection or Call Number Range
  //LL
    {
      type: TYPES.COLLECTION,
      name: "Periodicals",
      floor: -1,
      floorname: "Lower Level",
      x: 37.335549, y: -121.885019,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Government Publications",
      floor: -1,
      floorname: "Lower Level",
      x: 37.335784, y: -121.885217,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

  //1st Floor
    {
      type: TYPES.COLLECTION,
      name: "Brandenburg Browsing",
      floor: 1,
      floorname: "1st Floor",
      x: 37.335498, y: -121.885285,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Children's Room",
      floor: 1,
      floorname: "1st Floor",
      x: 37.335264, y: -121.885131,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

  //2nd Floor
    {
      type: TYPES.COLLECTION,
      name: "Reference",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335651, y: -121.885174,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    
    {
      type: TYPES.COLLECTION,
      name: "Ready Reference",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335600, y: -121.885053,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },  
    
    {
      type: TYPES.COLLECTION,
      name: "Reference Songbooks",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335644, y: -121.885022,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

  //3rd Floor

    {
      type: TYPES.COLLECTION,
      name: "Nonfiction",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335387, y: -121.885187,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },  

    {
      type: TYPES.COLLECTION,
      name: "Nonfiction Computer",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335640, y:-121.885227,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },  

    {
      type: TYPES.COLLECTION,
      name: "Nonfiction Careers",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335640, y: -121.885227,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },  

    {
      type: TYPES.COLLECTION,
      name: "Nonfiction ESL",
      floor: 3,
      floorname: "3rd Floor",
      x:  37.335723, y: -121.885343,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Fiction",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335402, y: -121.884732,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Nonfiction Learn a Language",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335723, y: -121.885343,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Large Print",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335723, y: -121.885343,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "MLK Collection",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335723, y: -121.885343,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Fiction Paperbacks",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335640, y: -121.885133,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Languages",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335792, y: -121.885017,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Teen Center",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335792, y: -121.885017,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Young Adult Nonfiction",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335723, y: -121.885343,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

  //5th Floor
    {
      type: TYPES.COLLECTION,
      name: "California Room",
      floor: 5,
      floorname: "5th Floor",
      x: 37.335824, y: -121.885259,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "SJSU Thesis",
      floor: 5,
      floorname: "5th Floor",
      x: 37.335727, y: -121.885326,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Beethoven Center",
      floor: 5,
      floorname: "5th Floor",
      x: 37.335382, y: -121.885269,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Steinbeck Center",
      floor: 5,
      floorname: "5th Floor",
      x: 37.335382, y: -121.885269,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Goldberg",
      floor: 5,
      floorname: "5th Floor",
      x: 37.335340, y: -121.884555,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Special Collections",
      floor: 5,
      floorname: "5th Floor",
      x: 37.335727, y: -121.885326,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Africana Center",
      floor: 5,
      floorname: "5th Floor",
      x: 37.335382, y: -121.885083,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Chicano Center",
      floor: 5,
      floorname: "5th Floor",
      x: 37.335382, y: -121.885083,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Ethnic Studies",
      floor: 5,
      floorname: "5th Floor",
      x: 37.335382, y: -121.885083,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Punjabi Studies",
      floor: 5,
      floorname: "5th Floor",
      x: 37.335382, y: -121.885083,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Jewish Studies",
      floor: 5,
      floorname: "5th Floor",
      x:37.335372, y: -121.885056,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    /*{
      type: TYPES.COLLECTION,
      name: "Portuguese Heritage Collection",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    }, */

    {
      type: TYPES.COLLECTION,
      name: "Asian American Center",
      floor: 5,
      floorname: "5th Floor",
      x: 37.335230, y: -121.884802,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

  //6th Floor
  
    {
      type: TYPES.COLLECTION,
      name: "Theses A-HN",
      floor: 6,
      floorname: "6th Floor",
      x: 37.335483,  y: -121.884882,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },  

    {
      type: TYPES.COLLECTION,
      name: "A-BL",
      floor: 6,
      floorname: "6th Floor",
      x: 37.335466, y: -121.885282,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "BM-CI",
      floor: 6,
      floorname: "6th Floor",
      x: 37.335466, y: -121.885282,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "CJ-DS",
      floor: 6,
      floorname: "6th Floor",
      x: 37.335466, y: -121.885282,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "DT-E",
      floor: 6,
      floorname: "6th Floor",
      x: 37.335466, y: -121.885282,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "F-HB",
      floor: 6,
      floorname: "6th Floor",
      x: 37.335466, y: -121.885282,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "HC-HM",
      floor: 6,
      floorname: "6th Floor",
      x: 37.335614, y: -121.885157, 
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

//7th Floor

    {
      type: TYPES.COLLECTION,
      name: "HQ-HV",
      floor: 7,
      floorname: "7Th Floor",
      x: 37.335429, y: -121.884764,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "HW-JN",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335375, y: -121.884658,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "JQ-LB",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335189, y: -121.884705,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "LB-N",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335298, y: -121.884924,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "NA-PA",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335365, y: -121.885039,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "PA-PL",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335425, y: -121.885166,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "PM-PQ",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335523, y: -121.885351,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "PQ-PR",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335562, y: -121.885418,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },
    
       {
      type: TYPES.COLLECTION,
      name: "PR-PZ",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335662, y: -121.885165,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Theses HT-PN",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335493, y: -121.884901,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

  //8th Floor
    {
      type: TYPES.COLLECTION,
      name: "Theses Q-Z",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335469, y: -121.884851,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Q-QA",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335424, y: -121.884736,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

{
      type: TYPES.COLLECTION,
      name: "QA-QD",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335386, y: -121.884592,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },
    
    {
      type: TYPES.COLLECTION,
      name: "QD-QR",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335184, y: -121.884742,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

 {
      type: TYPES.COLLECTION,
      name: "R-S",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335284, y: -121.884889,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },
    
    {
      type: TYPES.COLLECTION,
      name: "TA-TK",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335355, y: -121.885027,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "TK-TS",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335389, y: -121.885164,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "TT-Z",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335511, y: -121.885313,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Folio A-F",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335536, y: -121.885434,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "Folio F-Z",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335657, y: -121.885183,
      desc: "",
      image: "images/photos/Bookstacks-small.jpg",
      linkText: "",
      linkTarget: ""
    }

  ]; 

 
