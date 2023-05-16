import {BionicReader} from './bionicApi';
import './styles/main.scss';

const bionicReader = new BionicReader();

console.log(bionicReader);

const exampleText = `
<p>Qui fugiat adipisicing cillum proident excepteur. Eiusmod dolor veniam deserunt reprehenderit nisi culpa ad aliquip ipsum officia culpa. Id eu veniam ut do eiusmod veniam dolor fugiat. Anim labore id deserunt amet ad irure eiusmod commodo tempor. Culpa ad reprehenderit enim aliquip fugiat. Qui fugiat incididunt ex esse reprehenderit mollit culpa quis in eiusmod. Fugiat cupidatat consectetur id amet irure ut elit id reprehenderit ad ex.</p>
<p>Et elit consequat in id nisi sunt do ut minim non aliquip consequat. Incididunt magna elit aliqua non incididunt. Lorem ullamco pariatur sunt culpa ut dolor dolor aute est ad magna eiusmod. Nisi quis labore ex veniam ad tempor duis ullamco consectetur cillum ut dolor incididunt. Deserunt voluptate adipisicing dolore occaecat cupidatat nisi occaecat eiusmod eiusmod tempor. Ad voluptate labore quis deserunt est consectetur eu et deserunt laboris excepteur enim.</p>
<p>Voluptate velit culpa ad sint occaecat cillum laborum consectetur enim incididunt. Consequat reprehenderit est sunt Lorem ullamco dolor qui commodo amet Lorem ea. Officia occaecat labore ex cupidatat consequat est nisi.</p>
`;

//bionicReader.getBionicReaderText(exampleText);

let input = document.getElementById('bionicInput');
let output = document.getElementById('bionicOutput');

const generateButton = document.getElementById('bionicGenerate');
const resetButton = document.getElementById('bionicReset');

generateButton.addEventListener('click', () => {
    bionicReader.getBionicReaderText(input.value)
        .then((result) => {
            output.innerHTML = result.data;
        })
        .catch((error) => {
            output.innerHTML = error;
        });
});

resetButton.addEventListener('click', (event) => {
    input.value = "";
});


