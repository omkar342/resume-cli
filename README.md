# Resume CLI

This is a CLI tool that prints your resume in the terminal.

## Setup

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run locally:**
    ```bash
    node index.js
    ```
    OR
    ```bash
    npx .
    ```

## Customization

1.  **Update `package.json`:**
    *   Change `"name"` to `@your-linkedin-handle/resume`.
    *   Update `"author"` and `"description"`.

2.  **Update `index.js`:**
    *   Edit the `resume` object at the top of the file with your actual details.

## Publishing

1.  **Login to npm:**
    ```bash
    npm login
    ```

2.  **Publish:**
    ```bash
    npm publish --access public
    ```

## Usage

Once published, anyone can view your resume by running:

```bash
npx @omkar-jadhav-7809b7196/resume
```
