module.exports = (email)=>{


  return `
  <html>
  <head></head>
  <body>
  <h1>Newsletter:</h1>
<table>
<thead>
<tr>
<th>email</th>
</tr>
</thead>
<tbody>
<tr>
<td>${email}</td>
</tr>
</tbody>
</table>
</body>
</html>

  `
};
