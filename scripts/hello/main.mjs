import { Coda } from 'coda-js';
import _ from 'lodash';

const coda = new Coda('c51ee5bc-8776-460f-9e6e-fc59d72dca41'); // insert your token
var myArgs = process.argv.slice(2);

// trick for using async in a script
(async () => {
  const whoAmI = await coda.whoAmI();
  //console.log(whoAmI);

  const doc = await coda.getDoc('75Fow7MtOA')
  //console.log(doc)
  const table = await doc.getTable('SiGMA Resources')
  const rows = await table.listRows({
    useColumnNames: true, // param to display column names rather than key
    valueFormat: "rich"
  });
  //console.log(rows)
  const data = rows.map(row => {
    var image = ''
    if (row.values.Images){
      image = row.values.Images[0]
    }
    return {
      name: row.name,
      image: image
    }
  })

  console.log(JSON.stringify(data))

})().catch((error) => console.log(error));