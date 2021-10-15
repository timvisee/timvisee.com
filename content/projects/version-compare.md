+++
title = "version-compare"
description = "version-compare - Rust library to easily compare version strings."
date = 2017-03-13

[taxonomies]
tags = ["rust", "lib"]
categories = ["project"]

[extra]
zenn_applause = true
zenn_hide_header_meta = true
+++

[![Download statistics][crate-download-badge]][crate-link]
[![Crate version][crate-version-badge]][crate-link]
[![Documentation][docs-badge]][docs]
[![Build status on GitLab CI][gitlab-ci-master-badge]][gitlab-ci-link]
[![License][crate-license-badge]][crate-link]

[crate-download-badge]: https://img.shields.io/crates/d/version-compare.svg
[crate-license-badge]: https://img.shields.io/crates/l/version-compare.svg
[crate-link]: https://crates.io/crates/version-compare
[crate-version-badge]: https://img.shields.io/crates/v/version-compare.svg
[docs-badge]: https://docs.rs/version-compare/badge.svg
[docs]: https://docs.rs/version-compare
[gitlab-ci-link]: https://gitlab.com/timvisee/version-compare/pipelines
[gitlab-ci-master-badge]: https://gitlab.com/timvisee/version-compare/badges/master/pipeline.svg

> Rust library to easily compare version numbers with no specific format, and
> test against various comparison operators.

- [Visit project page on GitHub][github]

Comparing version numbers is hard, especially with weird version number formats.

This library helps you to easily compare any kind of version number with no
specific format using a best-effort approach.
Two version numbers can be compared to each other to get a comparison operator
(`<`, `==`, `>`), or test them against a comparison operator.

Along with version comparison, the library provides various other tools for
working with version numbers.

```rust
use version_compare::{compare, Cmp};

fn main() {
    let a = "1.3";
    let b = "1.2.4";

    match compare(a, b) {
        Ok(Cmp::Lt) => println!("Version a is less than b"),
        Ok(Cmp::Eq) => println!("Version a is equal to b"),
        Ok(Cmp::Gt) => println!("Version a is greater than b"),
        _ => panic!("Invalid version number"),
    }
}
```

---

- [Features](https://github.com/timvisee/version-compare/#features)
- [Examples](https://github.com/timvisee/version-compare/#example)

_View more on the project pages over at:_

- [GitHub][github]
- [GitLab][gitlab]

[github]: https://github.com/timvisee/version-compare
[gitlab]: https://gitlab.com/timvisee/version-compare
