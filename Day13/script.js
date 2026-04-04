const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

// Level 1

// 1
console.table(countries)

// 2 check /countries.js

// 3

const mathConstants = [3.14, 100, 2.71, 0.57]
const countriesInAfrica = ["Mozambique", 'Tanzania', 'Algeria', 'Namibia', 'Lesotho', 'Rwanda']
const techyJauntStudents = {
    'frk783' : {
        name: 'Nadim Fresh',
        age: 25,
        track: 'Data Science'
    },
    'cwr128' : {
        name: 'James Godfrey',
        age: 29,
        track: 'Graphic Design'
    },
    'ewo980' : {
        name: 'McCathy Alpenliebe',
        age: 22,
        track: 'Motion Design'
    },
    'nbs749' : {
        name: 'Vishna Rakim',
        age: 27,
        track: 'Cyber-security'
    }
}

const TechyJauntGenderArr = ['male', 'male', 'female', 'male']

console.group('Math Constants')
console.log(mathConstants)
console.groupEnd()

console.group('Techy Jaunt')
console.log(techyJauntStudents)
console.log(TechyJauntGenderArr)
console.groupEnd()

console.group('Countries in Africa')
console.log(countriesInAfrica)
console.groupEnd()


// Level 2
// 1
console.assert(10 > 2 * 10, "Not true")

// 2
console.warn(`You're are approaching a dangerous zone`)

// 3
console.error('There is an erroneous breach at the Facility')


// Level 3

// 1

console.time('For Of Loop')
let forOfConcat = ''
for (country of countries) {
    forOfConcat += country
}
console.timeEnd('For Of Loop')


console.time("Do While Loop")
let doWhileConcat = ''
let i = 0
do {
    doWhileConcat += countries[i]
    i++
} while (i < countries.length)
console.timeEnd('Do While Loop')
console.log(doWhileConcat)

console.time('ForEach Loop')
let forEachConcat = ''
countries.forEach(c  => forEachConcat += c)
console.timeEnd('ForEach Loop')

console.time('For Loop')
let forConcat = ''
for (let i = 0; i < countries.length; i++) {
    forConcat += countries[i]
}
console.timeEnd('For Loop')