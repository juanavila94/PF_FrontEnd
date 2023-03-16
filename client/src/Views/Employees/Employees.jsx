// import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Employee from "./Employee/Employee";
import style from "./Employees.module.css";
import SearchBar from "./SearchBar/SearchBar";
import { users } from "../../Utils";
import SideBar from "../../Components/SideBar/SideBar";

const Employees = () => {
  const [numEmployees, setNumEmployees] = useState(10);
  // const users = [
  //   {
  //     id: 1,
  //     name: "Juan",
  //     lastName: "García",
  //     email: "j.garcia@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  //     birthDate: "1985-02-10",
  //     dni: "12345678A",
  //     phone: "+1234567890",
  //     direction: "123 Main St, Anytown",
  //     admissionDate: "2019-01-01",
  //     position: "Software Engineer",
  //     area: "Engineering",
  //   },
  //   {
  //     id: 2,
  //     name: "Ana",
  //     lastName: "Rodriguez",
  //     email: "a.rodriguez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  //     birthDate: "1990-05-20",
  //     dni: "23456789B",
  //     phone: "+2345678901",
  //     direction: "456 High St, Anytown",
  //     admissionDate: "2020-02-01",
  //     position: "UX Designer",
  //     area: "Design",
  //   },
  //   {
  //     id: 3,
  //     name: "Pedro",
  //     lastName: "Martinez",
  //     email: "p.martinez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  //     birthDate: "1988-10-15",
  //     dni: "34567890C",
  //     phone: "+3456789012",
  //     direction: "789 Oak St, Anytown",
  //     admissionDate: "2018-05-01",
  //     position: "Marketing Manager",
  //     area: "Marketing",
  //   },
  //   {
  //     id: 4,
  //     name: "Laura",
  //     lastName: "Gonzalez",
  //     email: "l.gonzalez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  //     birthDate: "1995-03-12",
  //     dni: "45678901D",
  //     phone: "+4567890123",
  //     direction: "012 Elm St, Anytown",
  //     admissionDate: "2021-01-01",
  //     position: "Accountant",
  //     area: "Finance",
  //   },
  //   {
  //     id: 5,
  //     name: "Miguel",
  //     lastName: "Lopez",
  //     email: "m.lopez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  //     birthDate: "1992-07-18",
  //     dni: "56789012E",
  //     phone: "+5678901234",
  //     direction: "345 Maple St, Anytown",
  //     admissionDate: "2017-04-01",
  //     position: "Sales Manager",
  //     area: "Sales",
  //   },
  //   {
  //     id: 6,
  //     name: "Sofia",
  //     lastName: "Fernandez",
  //     email: "s.fernandez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  //     birthDate: "1998-12-05",
  //     dni: "67890123F",
  //     phone: "+6789012345",
  //     direction: "678 Birch St, Anytown",
  //     admissionDate: "2022-03-01",
  //     position: "HR Specialist",
  //     area: "Human Resources",
  //   },
  //   {
  //     id: 7,
  //     name: "Elena",
  //     lastName: "Ruiz",
  //     email: "e.ruiz@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/7.jpg",
  //     birthDate: "1991-09-23",
  //     dni: "78901234G",
  //     phone: "+7890123456",
  //     direction: "901 Cedar St, Anytown",
  //     admissionDate: "2020-06-01",
  //     position: "Data Analyst",
  //     area: "Data Science",
  //   },
  //   {
  //     id: 8,
  //     name: "Adrián",
  //     lastName: "Pérez",
  //     email: "a.perez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/8.jpg",
  //     birthDate: "1986-04-17",
  //     dni: "89012345H",
  //     phone: "+8901234567",
  //     direction: "234 Pine St, Anytown",
  //     admissionDate: "2019-07-01",
  //     position: "Product Manager",
  //     area: "Product",
  //   },
  //   {
  //     id: 9,
  //     name: "Isabel",
  //     lastName: "Sánchez",
  //     email: "i.sanchez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/9.jpg",
  //     birthDate: "1993-11-12",
  //     dni: "90123456I",
  //     phone: "+9012345678",
  //     direction: "567 Cedar St, Anytown",
  //     admissionDate: "2021-09-01",
  //     position: "Graphic Designer",
  //     area: "Design",
  //   },
  //   {
  //     id: 10,
  //     name: "Gabriel",
  //     lastName: "Ferrer",
  //     email: "g.ferrer@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  //     birthDate: "1990-02-22",
  //     dni: "01234567J",
  //     phone: "+0123456789",
  //     direction: "890 Maple St, Anytown",
  //     admissionDate: "2018-12-01",
  //     position: "Project Manager",
  //     area: "Project Management",
  //   },
  //   {
  //     id: 11,
  //     name: "Lucía",
  //     lastName: "Gómez",
  //     email: "l.gomez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/11.jpg",
  //     birthDate: "1994-07-08",
  //     dni: "12345678K",
  //     phone: "+1234567890",
  //     direction: "123 Oak St, Anytown",
  //     admissionDate: "2022-01-01",
  //     position: "Customer Support",
  //     area: "Customer Service",
  //   },
  //   {
  //     id: 12,
  //     name: "Pablo",
  //     lastName: "Torres",
  //     email: "p.torres@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  //     birthDate: "1988-12-05",
  //     dni: "23456789L",
  //     phone: "+2345678901",
  //     direction: "345 Cedar St, Anytown",
  //     admissionDate: "2017-04-01",
  //     position: "Sales Manager",
  //     area: "Sales",
  //   },
  //   {
  //     id: 13,
  //     name: "María",
  //     lastName: "Santos",
  //     email: "m.santos@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/13.jpg",
  //     birthDate: "1996-03-28",
  //     dni: "34567890M",
  //     phone: "+3456789012",
  //     direction: "678 Pine St, Anytown",
  //     admissionDate: "2020-11-01",
  //     position: "Marketing Analyst",
  //     area: "Marketing",
  //   },
  //   {
  //     id: 14,
  //     name: "Javier",
  //     lastName: "Morales",
  //     email: "j.morales@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  //     birthDate: "1985-08-14",
  //     dni: "45678901N",
  //     phone: "+4567890123",
  //     direction: "901 Oak St, Anytown",
  //     admissionDate: "2019-03-01",
  //     position: "Software Developer",
  //     area: "Engineering",
  //   },
  //   {
  //     id: 15,
  //     name: "Carmen",
  //     lastName: "González",
  //     email: "c.gonzalez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/15.jpg",
  //     birthDate: "1992-05-20",
  //     dni: "56789012O",
  //     phone: "+5678901234",
  //     direction: "234 Maple St, Anytown",
  //     admissionDate: "2022-02-01",
  //     position: "Content Creator",
  //     area: "Marketing",
  //   },
  //   {
  //     id: 16,
  //     name: "Sergio",
  //     lastName: "Navarro",
  //     email: "s.navarro@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/16.jpg",
  //     birthDate: "1989-01-18",
  //     dni: "67890123P",
  //     phone: "+6789012345",
  //     direction: "567 Oak St, Anytown",
  //     admissionDate: "2018-08-01",
  //     position: "Human Resources Manager",
  //     area: "Human Resources",
  //   },
  //   {
  //     id: 17,
  //     name: "Ana",
  //     lastName: "Martínez",
  //     email: "a.martinez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/17.jpg",
  //     birthDate: "1990-06-25",
  //     dni: "78901234Q",
  //     phone: "+7890123456",
  //     direction: "789 Elm St, Anytown",
  //     admissionDate: "2021-01-01",
  //     position: "Graphic Designer",
  //     area: "Marketing",
  //   },
  //   {
  //     id: 18,
  //     name: "Carlos",
  //     lastName: "Ruiz",
  //     email: "c.ruiz@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/18.jpg",
  //     birthDate: "1983-11-03",
  //     dni: "89012345R",
  //     phone: "+8901234567",
  //     direction: "567 Main St, Anytown",
  //     admissionDate: "2016-02-01",
  //     position: "Senior Software Engineer",
  //     area: "Engineering",
  //   },
  //   {
  //     id: 19,
  //     name: "Lucía",
  //     lastName: "Gómez",
  //     email: "l.gomez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/19.jpg",
  //     birthDate: "1987-04-17",
  //     dni: "90123456S",
  //     phone: "+9012345678",
  //     direction: "456 Pine St, Anytown",
  //     admissionDate: "2015-07-01",
  //     position: "Product Manager",
  //     area: "Product",
  //   },
  //   {
  //     id: 20,
  //     name: "Diego",
  //     lastName: "Hernández",
  //     email: "d.hernandez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/20.jpg",
  //     birthDate: "1994-02-08",
  //     dni: "01234567T",
  //     phone: "+0123456789",
  //     direction: "123 Cedar St, Anytown",
  //     admissionDate: "2021-06-01",
  //     position: "Frontend Developer",
  //     area: "Engineering",
  //   },
  //   {
  //     id: 21,
  //     name: "Elena",
  //     lastName: "Díaz",
  //     email: "e.diaz@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/21.jpg",
  //     birthDate: "1986-09-12",
  //     dni: "12345678U",
  //     phone: "+1234567890",
  //     direction: "901 Pine St, Anytown",
  //     admissionDate: "2017-10-01",
  //     position: "Customer Service Representative",
  //     area: "Customer Service",
  //   },
  //   {
  //     id: 22,
  //     name: "Sofía",
  //     lastName: "Moreno",
  //     email: "s.moreno@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  //     birthDate: "1991-12-02",
  //     dni: "23456789V",
  //     phone: "+2345678901",
  //     direction: "345 Oak St, Anytown",
  //     admissionDate: "2020-03-01",
  //     position: "Data Analyst",
  //     area: "Analytics",
  //   },
  //   {
  //     id: 23,
  //     name: "Javier",
  //     lastName: "Sánchez",
  //     email: "j.sanchez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/23.jpg",
  //     birthDate: "1980-05-20",
  //     dni: "34567890W",
  //     phone: "+3456789012",
  //     direction: "567 Cedar St, Anytown",
  //     admissionDate: "2010-09-01",
  //     position: "Chief Financial Officer",
  //     area: "Finance",
  //   },
  //   {
  //     id: 24,
  //     name: "Laura",
  //     lastName: "Fernández",
  //     email: "l.fernandez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/24.jpg",
  //     birthDate: "1988-08-28",
  //     dni: "45678901X",
  //     phone: "+4567890123",
  //     direction: "789 Elm St, Anytown",
  //     admissionDate: "2019-08-01",
  //     position: "Marketing Manager",
  //     area: "Marketing",
  //   },
  //   {
  //     id: 25,
  //     name: "Pedro",
  //     lastName: "González",
  //     email: "p.gonzalez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/men/25.jpg",
  //     birthDate: "1995-04-11",
  //     dni: "56789012Y",
  //     phone: "+5678901234",
  //     direction: "123 Cedar St, Anytown",
  //     admissionDate: "2021-11-01",
  //     position: "Backend Developer",
  //     area: "Engineering",
  //   },
  //   {
  //     id: 26,
  //     name: "Marta",
  //     lastName: "López",
  //     email: "m.lopez@mail.com",
  //     avatar: "https://randomuser.me/api/portraits/women/26.jpg",
  //     birthDate: "1992-01-15",
  //     dni: "67890123Z",
  //     phone: "+6789012345",
  //     direction: "901 Oak St, Anytown",
  //     admissionDate: "2018-05-01",
  //     position: "Human Resources Manager",
  //     area: "Human Resources",
  //   },
  // ];

  const [filteredUsers, setFilteredUsers] = React.useState(users);

  const loadMoreEmployees = () => {
    setNumEmployees(numEmployees + 4);
  };

  const handleSearch = (term) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <SideBar />
      <div className={style.titleContainer}>
        <h2>List of Employees</h2>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div
        style={{ height: "400px", overflow: "auto" }}
        onScroll={(e) => {
          const element = e.target;
          if (
            element.scrollHeight - element.scrollTop ===
            element.clientHeight
          ) {
            loadMoreEmployees();
          }
        }}
        className={style.cardsContainer}
      >
        {filteredUsers.slice(0, numEmployees).map((user) => {
          return (
            <Link key={user.id} to={`/employee/${user.id}`}>
              <Employee
                id={user.id}
                name={user.name}
                lastName={user.lastName}
                position={user.position}
                avatar={user.avatar}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Employees;
