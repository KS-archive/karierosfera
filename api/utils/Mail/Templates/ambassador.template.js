module.exports = (firstname, surname, email, phone, city, university, inOrganisation
  , organisationName, fweWordsAbout, acceprReg)=>{


  return `
  <html>
  <head></head>
  <body>
  <h1>Ambasador:</h1>
<table>
<thead>
<tr>
<th>imie</th>
<th>nazwisko</th>
<th>email</th>
<th>telefon</th>
<th>miasto</th>
<th>uniwersytet</th>
<th>czy w organizacji</th>
<th>nazwa organizacji</th>
<th>kilka słów o sobie</th>
<th>akceptacja regulaminu</th>
</tr>
</thead>
<tbody>
<tr>
<td>${firstname}</td>
<td>${surname}</td>
<td>${email}</td>
<td>${phone}</td>
<td>${city}</td>
<td>${university}</td>
<td>${inOrganisation}</td>
<td>${organisationName}</td>
<td>${fweWordsAbout}</td>
<td>${acceprReg}</td>
</tr>
</tbody>
</table>
</body>
</html>

  `
};
