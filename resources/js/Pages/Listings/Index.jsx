import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Index({ listings, filters }) {
  const [searchNeed, setSearchNeed] = useState(filters.need || '');
  const [searchOffer, setSearchOffer] = useState(filters.offer || '');

  function handleSearch() {
    router.get('/', {
      need: searchNeed,
      offer: searchOffer,
    });
  }

  return (
    <div>
      <h1>Listings</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Search need..."
          value={searchNeed}
          onChange={(e) => setSearchNeed(e.target.value)}
        />

        <input
          placeholder="Search offer..."
          value={searchOffer}
          onChange={(e) => setSearchOffer(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {listings.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}