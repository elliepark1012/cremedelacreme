# lib/tasks/assets.rake

namespace :assets do
  desc 'Clean compiled assets'
  task :clean => :environment do
    Rake::Task['assets:clobber'].invoke
  end
end