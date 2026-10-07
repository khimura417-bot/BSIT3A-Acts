// Object Literal 1
const user1 = {
    username: "keith_dev",
    profile: { bio: "BSIT Student" }
};

// Object Literal 2 (missing profile object)
const user2 = {
    username: "guest_user"
};

// Destructured Object 1 & 2
const { username: name1 } = user1;
const { username: name2 } = user2;

// Optional Chaining (?.) to safely read deeply nested data
console.log(`${name1}'s Bio: ${user1.profile?.bio}`);
console.log(`${name2}'s Bio: ${user2.profile?.bio}`); // Outputs undefined without crashing
