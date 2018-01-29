# paramStoreJS

The project is used for the retrieval or mass production of Parameter Store keys in AWS.

---

## Getting Started

Ensure you are set up with AWS initialized on your computer.

### Retrieval

#### Single

When entering a parameter name ensure there is a leading slash but not a trailing one
Run `node getParam.js {/full/name/of/parameter}`

#### Multiple

When entering a path as an argument ensure it begins and ends with a slash
Run `node getParams.js {/path/to/directory/}`

### Production

Create a JSON file thats hierarchy is:
```
{
  {KMS1 ARN}: {
    {Parameter1 Name}: {Parameter1 Value},
    {Parameter2 Name}: {Parameter2 Value}
  }
}
```
Ensure the file is named parameters.json
Run `node setParams.js`
