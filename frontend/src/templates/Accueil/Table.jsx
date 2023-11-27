import React from 'react'
import '../../asset/css/Accueil.css'

function Table() {
  return (
    <div>
      <table class="table bg-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom</th>
      <th scope="col">Prix</th>
      <th scope="col">1h %</th>
      <th scope="col">% 24h</th>
      <th scope="col">7d % </th>
      <th scope="col">Cap. Marché</th>
      <th>Volume (24 h)</th>
      <th>Offre en Circulation</th>
      <th>7 Derniers Jours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Table
