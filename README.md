## OMDB Search

## Configuration
File directory:

```diff
    .
    ├── config                  # Config source
    ├── src                     # Source files
    │   ├── connectors          # Connectors to external services
    │   ├── middleware          # Middleware file needed to add more context to requests
    │   ├── routes              # Routes
    │   ├── services            # Business core logic
    │   ├── transformation      # Mapping and form specific object
    │   └── utils               # Common utilities
    ├── test                    # Test folder
    └── package.json
```

### Running
```diff
    npm run start
```

### Endpoint

#### [GET] /search
```diff
    Query: 
    Parameter       | Required      | Valid Options | Description
    -------------   | ------------- | ------------- | -------------
    id              | false         |               | A valid IMDb ID (e.g. tt1285016)
    title           | false         |               | Movie title to search for.
    keyword         | true          |               | Movie title to search for. (will ignoring id)
    year            | false         |               | Year of release.
    plot            | false         |               | Return short or full plot.
    type            | false         |               | Type of result to return.
    page            | false         |               | Page number to return
    apikey          | true          |               | Api Key to accses omdb.
```
