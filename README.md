# Chèn Css Và Javascript

```
<link rel="stylesheet" href="https://shinmodule.vercel.app/shin.css">
<script src="https://shinmodule.vercel.app/shin.js"></script>
```

# HTML FORM

```
 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Form</title>

    <link rel="stylesheet" href="localstyle.css">
    <link rel="stylesheet" href="https://shinmodule.vercel.app/shin.css">

</head>

<body>
    <script>
        const handleSubmit = (e) => {
            const dataForm = submitShin(e)
            console.log(dataForm)
        }
    </script>
    <div class="form-div">
        <form id="form1" class="shin-form" onsubmit="handleSubmit(event)">
            <div class="shin-form-item" label="Id Shop:" name="idShop">
                <input>
            </div>
            <button type="submit" class="shin-submit">Submit</button>
        </form>
    </div>


    <script src="https://shinmodule.vercel.app/shin.js"></script>
</body>

</html>
```

#
