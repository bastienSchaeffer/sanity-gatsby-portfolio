export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6107a5dc422fca8aa9ac73e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gb1d674t',
                  apiId: '421d2285-784f-4b9d-af28-f1821f14cad8'
                },
                {
                  buildHookId: '6107a5dc5cf435c3cde86332',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-m5tsvq6z',
                  apiId: 'e5838168-3828-405f-b8fa-851c82c24d65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bastienSchaeffer/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-m5tsvq6z.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
