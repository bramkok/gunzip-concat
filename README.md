# gunzip-concat

Transform stream that gunzips its input if it is gzipped and just echoes it if not.

```
yarn add gunzip-concat
```

## Usage

Simply pipe a gzipped (or not gzipped) stream to `gunzip([maxRecursion = 3])` and read the unzipped content.
`maxRecursion` protects the unzip mechanism from an infinite recursion in case of a malicious archive.

``` js
// this will gunzip gzippedStream
gzippedStream.pipe(gunzip()).pipe(process.stdout);

// this will just echo plainTextStream
plainTextStream.pipe(gunzip()).pipe(process.stdout);
```

## CLI usage

```
npm install -g gunzip-concat
gunzip-concat --help # will print out usage
```

## License

MIT
