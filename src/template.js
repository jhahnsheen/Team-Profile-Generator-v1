// function that creates all the div tags for each team member
const teamMaker = (team) => {
  // manager
  const managerMaker = (manager) => {
    return(
    `
    <div class="flex flex-col w-80 h-96 bg-[#F2F2F2] rounded-xl mx-4 my-4">
      <h1 class="text-4xl font-[500] text-[#181717] mt-6 ml-8">${manager.getName()}</h1>
      <h2 class="text-xl font-[400] text-[#606060] ml-8 mb-4">${manager.getRole()}</h2>
      <div class="flex flex-col border-t-2 border-[#CDCDCD] mx-8">
        <h3 class="text-base font-[500] text-[#606060] mt-6">ID</h3>
        <p class="text-lg font-[500] text-[#181717] mt-1">${manager.getId()}</p>
        <h3 class="text-base font-[500] text-[#606060] mt-6">Email</h3>
        <a href="mailto:${manager.getEmail()}" class="text-lg font-[500] text-[#181717] mt-1">${manager.getEmail()}</a>
        <h3 class="text-base font-[500] text-[#606060] mt-6">Office Number</h3>
        <p class="text-lg font-[500] text-[#181717] mt-1">${manager.getOfficeNumber()}</p>
      </div>
    </div>
    `);
  };
  // engineer
  const engineerMaker = (engineer) => {
    return(
    `
    <div class="flex flex-col w-80 h-96 bg-[#F2F2F2] rounded-xl mx-4 my-4">
      <h1 class="text-4xl font-[500] text-[#181717] mt-6 ml-8">${engineer.getName()}</h1>
      <h2 class="text-xl font-[400] text-[#606060] ml-8 mb-4">${engineer.getRole()}</h2>
      <div class="flex flex-col border-t-2 border-[#CDCDCD] mx-8">
        <h3 class="text-base font-[500] text-[#606060] mt-6">ID</h3>
        <p class="text-lg font-[500] text-[#181717] mt-1">${engineer.getId()}</p>
        <h3 class="text-base font-[500] text-[#606060] mt-6">Email</h3>
        <a href="mailto:${engineer.getEmail()}" class="text-lg font-[500] text-[#181717] mt-1">${engineer.getEmail()}</a>
        <h3 class="text-base font-[500] text-[#606060] mt-6">Github</h3>
        <a href="https://github.com/${engineer.getGithub()}" class="text-lg font-[500] text-[#181717] mt-1">${engineer.getGithub()}</a>
      </div>
    </div>
    `);
  };
  // intern
  const internMaker = (intern) => {
    return(
    `
    <div class="flex flex-col w-80 h-96 bg-[#F2F2F2] rounded-xl mx-4 my-4">
      <h1 class="text-4xl font-[500] text-[#181717] mt-6 ml-8">${intern.getName()}</h1>
      <h2 class="text-xl font-[400] text-[#606060] ml-8 mb-4">${intern.getRole()}</h2>
      <div class="flex flex-col border-t-2 border-[#CDCDCD] mx-8">
        <h3 class="text-base font-[500] text-[#606060] mt-6">ID</h3>
        <p class="text-lg font-[500] text-[#181717] mt-1">${intern.getId()}</p>
        <h3 class="text-base font-[500] text-[#606060] mt-6">Email</h3>
        <a href="mailto:${intern.getEmail()}" class="text-lg font-[500] text-[#181717] mt-1">${intern.getEmail()}</a>
        <h3 class="text-base font-[500] text-[#606060] mt-6">School</h3>
        <p class="text-lg font-[500] text-[#181717] mt-1">${intern.getSchool()}</p>
      </div>
    </div>
    `);
  };
  // build empty array to hold team members
  const teamBuild = [];
  // push the team members by role into array
  // manager
  teamBuild.push(
    team.filter(employee => employee.getRole() === 'Manager')
    .map(manager => managerMaker(manager))
  );
  // engineer (can have multiple so must join)
  teamBuild.push(
    team.filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => engineerMaker(engineer))
    .join('')
  );
  // intern (can have multiple so must join)
  teamBuild.push(
    team.filter(employee => employee.getRole() === 'Intern')
    .map(intern => internMaker(intern))
    .join('')
  );
  // return all contents of array
  return teamBuild.join('');
}

module.exports = (team) => {
  return(
  `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Team</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
</head>
<body class="flex flex-col justify-center h-max bg-[#E5E5E5] font-['DM_Sans']">
  <header class="flex place-content-center mx-40 mt-16 mb-8">
    <h1 class="text-6xl font-[500] text-[#181717]">My team</h1>
  </header>
  <main class="flex flex-wrap justify-center mx-40 my-10">
    ${teamMaker(team)}
  </main>
</body>
</html>
  `);
};