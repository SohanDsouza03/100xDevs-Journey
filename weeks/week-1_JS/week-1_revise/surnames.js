const users = [
    {
        fname: "Sohan",
        gender: "male"
    },
    {
        fname: "Steven",
        gender: "male"
    },
    {
        fname: "Sharon",
        gender: "female"
    }
];

for (const user of users) {
    if (user.gender === "male") {
        console.log(user.fname);
    }
}