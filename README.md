# paramStoreJS

The project is used for the retrieval or mass production of Parameter Store keys in AWS.

---

## Getting Started

Ensure you are set up with AWS initialized on your computer.

### Retrieval

Enter a path name to a parameter that you have access too.
Run `node getParams.js`

### Production

Create a JSON file thats hierarchy is:
```
{
  KMS1 ARN: {
    Parameter1 Name: Parameter1 Value,
    Parameter2 Name: Parameter2 Value
  }
}
```
Ensure the file is named parameters.json.
Run `node setParams.js`.
