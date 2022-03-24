export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '623cbb91b02ed028edd72ddd',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-npjyhf2y',
                  apiId: '1a9e1eb8-12e6-412c-aaec-9f3277c41ace'
                },
                {
                  buildHookId: '623cbb9139767825a2c17bc4',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-9d9xfdh5',
                  apiId: '5818b0cb-724f-4ef8-becd-39074eb5202a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suibaku/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-9d9xfdh5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
