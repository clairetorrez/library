# MyLibrary

**MyLibrary** is a high-performance Go library that simplifies data transformation and validation for backend services. It provides an intuitive API to clean, format, and verify complex datasets with minimal code and maximum efficiency.

## Motivation

In many projects, data transformation and validation are tedious and error-prone tasks that require a lot of repetitive code. Existing solutions are either too heavyweight or too generic, making it difficult to write clean, maintainable code quickly.

I built **MyLibrary** because I wanted a lightweight, efficient toolkit that empowers developers to focus on their core logic without worrying about boilerplate data handling. Whether you’re building APIs, data pipelines, or backend services, this library helps you reduce bugs and speed up development by providing reliable, reusable components for common data operations.

## 🚀 Quick Start

### Install MyLibrary using the Go toolchain

go get github.com/clairetorrez/mylibrary

## Use MyLibrary in your Go project

package main

import (
    "fmt"
    "github.com/clairetorrez/mylibrary"
)

func main() {
    result := mylibrary.DoSomething("example input")
    fmt.Println(result)
}

## 📖 Usage

MyLibrary provides several options and functions to help you transform and validate data with ease.

### Available features:

- `CleanData(input string) string` — Sanitizes input by removing unwanted characters.
- `ValidateFormat(input string) bool` — Checks if the input matches expected formats.
- `TransformCase(input string, mode string) string` — Converts text to uppercase, lowercase, or title case.
- `BatchProcess(inputs []string) []string` — Processes multiple inputs efficiently.

### Configuration options:

- `MaxRetries` (int) — Number of retry attempts on failure (default 3)
- `Timeout` (duration) — Maximum wait time for operations (default 5s)
- `EnableLogging` (bool) — Toggle verbose logging (default false)

## Examples

### Clean and validate a single string

cleaned := mylibrary.CleanData("  Hello, World!  ")
isValid := mylibrary.ValidateFormat(cleaned)
fmt.Println(cleaned, isValid)

### Transform text to title case

title := mylibrary.TransformCase("hello world from golang", "title")
fmt.Println(title) // Hello World From Golang

### Process a batch of strings

inputs := []string{"input1", "input2", "input3"}
results := mylibrary.BatchProcess(inputs)
fmt.Println(results)

## 🤝 Contributing

### Clone the repo

git clone https://github.com/clairetorrez/mylibrary.git <br>
cd mylibrary

### Build the project
go build

### Run the project
./mylibrary

### Run the tests
go test ./...

### Submit a pull request
If you'd like to contribute, please fork the repository and open a pull request to the main branch. We welcome bug fixes, feature requests, and improvements to documentation!
