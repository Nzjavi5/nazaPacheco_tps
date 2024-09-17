/* Por cada película se necesita conocer esta información:
i. Identificador único de la película (id)
ii. Calificación por parte de los usuarios (rating)
iii. Premios (awards).
iv. Duración de la película (length).
v. Precio (price).
vi. Género de la película (genre):
1. Acción
2. Animación
3. Aventuras
4. Comedia
5. Suspenso. */
let peliculas = [
    {
        id: 1,
        rating: 8.5,
        awards: ['Oscar', 'Golden Globe'],
        length: 120,
        price: 15.99,
        genre: 'Acción'
    },
    {
        id: 2,
        rating: 7.8,
        awards: 'BAFTA',
        length: 95,
        price: 12.50,
        genre: 'Comedia'
    },
    {
        id: 3,
        rating: 9.0,
        awards: ['Oscar', 'Cannes'],
        length: 150,
        price: 18.50,
        genre: 'Suspenso'
    },
    {
        id: 4,
        rating: 9.5,
        awards: ['Annie Awards', 'Goya'],
        length: 120,
        price: 14.99,
        genre: 'Animación'
    },
    {
        id: 5,
        rating: 8.0,
        awards: 'Oscar',
        length: 135,
        price: 17.99,
        genre: 'Aventura'
    }
];

module.exports = peliculas;