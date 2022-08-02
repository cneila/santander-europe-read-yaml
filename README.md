# This action parse YAML to JSON.

This action parse YAML file to JSON file

## Inputs

### `path`

**Required** The name of the file to parse. Default `"default.yml"`.

## Outputs

### `file.json`

## Example usage

```yaml
uses: actions/santander-europe-read-yaml@main
with:
  # INPUT NAME: "path"
  path: ${{ steps.getversion.outputs.file }}
```
