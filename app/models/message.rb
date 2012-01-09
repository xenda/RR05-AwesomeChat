class Message < ActiveRecord::Base

  Pusher.app_id = '13313'
  Pusher.key = '1ecb3ae402bda1983f91'
  Pusher.secret = 'fffcc5bef6300ec9997f'

  after_create :send_to_pusher

  def send_to_pusher
    logger.info "Hi?"
    Pusher['cool_chat'].trigger("message:create",self.to_json)  
  end
  
end

  # set_table_name "mensajes"
  # set_primary_key "codigo"
  # belongs_to :emitter, :class_name => "User", :foreign_key => "emisor_id"
  # belongs_to :receptor, :class_name => "User", :foreign_key => "receptor_id"

  # Message.establish_connection(
  #       :adapter  => "mysql",
  #       :host     => "localhost",
  #       :username => "XXX",
  #       :password => "XXXX",
  #       :database => "XXXXX",
  #       :encoding => "utf8"
  #     )


# class User < ActiveRecord::Base
#   has_many :emitted_messages, :class_name => "Message", 
#   has_many :received_messages, :class_name => "Message", 
# end
