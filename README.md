# Official website of WishUponALlama

## Local development

Download all the dependencies in the Gemfile.

`$ bundle install`

Run the website locally.

`$ bundle exec jekyll serve`

## Updating the prod website

Any commit pushed to branch `main` will cause a Github action to trigger: https://github.com/wishuponallama/wishuponallama.github.io/actions which will create a new build and deployment.
