module.exports = (name, email, subject, mailContent)=>{


  return `
  <html>
  <head></head>
  <body>
  <h1>Kontakt:</h1>
<table>
<thead>
<tr>
<th>imie</th>
<th>email</th>
<th>temat</th>
<th>treść</th>
</tr>
</thead>
<tbody>
<tr>
<td>${name}</td>
<td>${email}</td>
<td>${subject}</td>
<td>${mailContent}</td>
</tr>
</tbody>
</table>
</body>
</html>

  `
};
